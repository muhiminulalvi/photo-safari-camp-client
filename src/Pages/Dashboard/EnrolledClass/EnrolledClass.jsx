import { useState, useEffect } from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const EnrolledClass = () => {
  const [paidItems, setPaidItems] = useState([]);
  const [axiosSecure] = useAxiosSecure();

  useEffect(() => {
    axiosSecure.get("/payments")
      .then((res) => {
        setPaidItems(res.data);
      })
      .catch((error) => {
        console.error("Failed to fetch paid items:", error);
      });
  }, [axiosSecure]);


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
