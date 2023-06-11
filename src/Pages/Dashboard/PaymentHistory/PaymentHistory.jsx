import { useEffect, useState } from "react";
// import axios from "axios";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const PaymentHistory = () => {
  const [paymentData, setPaymentData] = useState([]);
  const [axiosSecure] = useAxiosSecure();

  useEffect(() => {
    axiosSecure.get("/payments")
      .then((res) => {
        const sortedData = res.data.sort((a, b) =>
          new Date(b.date) - new Date(a.date)
        );
        setPaymentData(sortedData);
        // setPaymentData(res.data)
      })
      .catch((error) => {
        console.error("Failed to fetch paid items:", error);
      });
  }, [axiosSecure]);

  return (
    <div className=" overflow-x-auto w-full xl:px-32 md:px-10 sm:px-2">
      <h2>Payment History</h2>
      <table className="table">
        <thead>
          <tr>
            <th>Email</th>
            <th>Transaction ID</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {paymentData.map((payment) => (
            <tr key={payment._id}>
              <td>{payment.email}</td>
              <td>{payment.transactionId}</td>
              <td>{payment.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PaymentHistory;
