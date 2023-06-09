import { Link } from "react-router-dom";
import useCart from "../../../hooks/useCart";

const MyCart = () => {
  const [cart] = useCart();
  const total = cart.reduce((sum, item) => item.price + sum, 0);
  return (
    <div>
      <div className="uppercase flex items-center justify-between font-bold gap-6">
        <h3 className="text-xl">Total Items: {cart.length}</h3>
        <h3 className="text-xl">Total Price: ${total}</h3>
        <Link>
          <button className="btn btn-secondary">Pay Now</button>
        </Link>
      </div>
      <div className="overflow-x-auto py-6">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th className="font-bold text-xl text-black">#</th>
              <th className="font-bold text-xl text-black">Image</th>
              <th className="font-bold text-xl text-black">Name</th>
              <th className="font-bold text-xl text-black">Price</th>
              <th className="font-bold text-xl text-black">Action</th>
            </tr>
          </thead>
          <tbody>
            {/* row */}
            {cart.map((item, index) => (
              <tr key={item._id}>
                <th>{index + 1}</th>
                <td>
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img
                          src={item.image}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                  </div>
                </td>
                <td className="font-bold">{item.name}</td>
                <td className="text-end font-bold">${item.price}</td>
                <td>
                  <button className="btn btn-error">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyCart;
