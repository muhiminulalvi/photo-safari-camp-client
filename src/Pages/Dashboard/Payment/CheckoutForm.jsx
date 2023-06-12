import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useContext, useEffect, useState } from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { AuthContext } from "../../../Provider/AuthProvider";

const CheckoutForm = ({ price, item }) => {
  const { user } = useContext(AuthContext);
  const stripe = useStripe();
  const elements = useElements();
  const [cardError, setCardError] = useState("");
  const [axiosSecure] = useAxiosSecure();
  const [clientSecret, setClientSecret] = useState("");
  const [processing, setProcessing] = useState(false);
  const [transactionId, setTransactionId] = useState("");

  useEffect(() => {
    if (price > 0) {
      axiosSecure.post("/create-payment-intent", { price }).then((res) => {
        console.log(res.data.clientSecret);
        setClientSecret(res.data.clientSecret);
      });
    }
  }, [price, axiosSecure]);
  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);
    if (card === null) {
      return;
    }

    const { error } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      console.log("error", error);
      setCardError(error.message);
    } else {
      setCardError("");
      // console.log('payment method', paymentMethod)
    }
    setProcessing(true);
    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            email: user?.email || "unknown",
            name: user?.displayName || "anonymous",
          },
        },
      });
    if (confirmError) {
      console.log(confirmError);
    }

    console.log("payment intent", paymentIntent);
    setProcessing(false);
    if (paymentIntent.status === "succeeded") {
      setTransactionId(paymentIntent.id);
      const payment = {
        email: user?.email,
        transactionId: paymentIntent.id,
        price,
        date: new Date(),
        quantity: item.length,
        cartItems: item._id,
        itemItems: item._id,
        courseId: item.courseId,
        // status: 'service pending',
        itemNames: item.name,
      };
      axiosSecure.post("/payments", payment).then((res) => {
        console.log(res.data);
        if (res.data.insertResult.insertedId) {
          // Remove items from the item
        //   axiosSecure.delete("/items", {
        //     data: { itemItems: item.map((item) => item._id) },
        //   })
        //   .then((res) => {
        //     console.log("Items removed from item:", res.data);
        //     // Update the enrolled classes
        //     axiosSecure.post("/classes/enroll", { courseId: item.map((item) => item.courseId) })
        //       .then((res) => {
        //         console.log("Classes updated:", res.data);
        //         // Display confirm
        //       })
        //       .catch((error) => {
        //         console.error("Failed to update classes:", error);
        //       });
        //   })
        //   .catch((error) => {
        //     console.error("Failed to remove items from item:", error);
        //   });
        }
      });
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
        <button
          type="submit"
          className="btn btn-sm btn-primary"
          disabled={!stripe || !clientSecret || processing}
        >
          Pay
        </button>
      </form>
      {cardError && <p className="text-error ">{cardError}</p>}
      {transactionId && (
        <p className="text-secondary">
          Transaction complete with transactionId: {transactionId}
        </p>
      )}
    </div>
  );
};

export default CheckoutForm;
