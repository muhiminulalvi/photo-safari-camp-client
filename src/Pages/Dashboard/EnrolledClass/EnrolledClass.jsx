import { useState, useEffect, useContext } from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { AuthContext } from "../../../Provider/AuthProvider";

const EnrolledClass = () => {
  const [paidItems, setPaidItems] = useState([]);
  const [axiosSecure] = useAxiosSecure();
  const {user} = useContext(AuthContext)

  useEffect(() => {
    axiosSecure.get("/payments")
      .then((res) => {
        // setPaidItems(res.data);
        const userPaidItems = res.data.filter((item) => item.email === user?.email);
        console.log(userPaidItems);

      setPaidItems(userPaidItems);
      })
      .catch((error) => {
        console.error("Failed to fetch paid items:", error);
      });
  }, [axiosSecure, user]);


  return (
    <div className="overflow-x-auto w-full xl:px-32 md:px-10 sm:px-2">
      <h2>Enrolled Classes</h2>
      <table className="table table-xs">
        <thead>
          <tr>
            <th>#</th>
            <th>Item Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {paidItems.map((item, index) => (
            <tr key={item._id}>
                <td>{index + 1}</td>
              <td>{item.itemNames}</td>
              <td>{item.price}</td>

            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EnrolledClass;
