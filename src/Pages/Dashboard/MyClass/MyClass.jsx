import { useContext} from "react";
import { AuthContext } from "../../../Provider/AuthProvider";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";

const MyClass = () => {
  const { user } = useContext(AuthContext);

  const { data: classes = [] } = useQuery({
    queryKey: ["classes"],
    queryFn: async () => {
      const response = await axios.get(
        `http://localhost:5000/classes?email=${user?.email}`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("access-token")}`,
          },
        }
      );
      return response.data;
    },
    refetchInterval: 5000
  });

  

    const handleUpdate = item => {
      console.log(item);
    }
  return (
    <div className="w-full">
      <h2 className="font-bold text-4xl text-center">My Classes</h2>
      <div className="overflow-x-auto py-6">
        <table className="table table-xs">
          <thead>
            <tr>
              <th className="font-bold text-sm text-black">#</th>
              <th className="font-bold text-sm text-black">Class Name</th>
              <th className="font-bold text-sm text-black">Status</th>
              <th className="font-bold text-sm text-black">Available Seats</th>
              <th className="font-bold text-sm text-black">
                Total Enrolled Students
              </th>
              <th className="font-bold text-sm text-black">Feedback</th>
              <th className="font-bold text-sm text-black">Action</th>
            </tr>
          </thead>
          <tbody>
            {classes.map((item, index) => (
              <tr key={item._id}>
                <th>{index + 1}</th>
                <td>{item.name}</td>
                <td>{item.status}</td>
                <td>{item.availableSeats}</td>
                <td>{item.studentsEnrolled}</td>
                <td>{item.status === "denied" ? item.feedback : ""}</td>
                <td>
                  <button
                    onClick={() => handleUpdate(item)}
                    className="btn btn-primary"
                    disabled={item.status == "pending"}
                  >
                    Update
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyClass;
