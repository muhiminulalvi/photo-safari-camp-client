import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Swal from 'sweetalert2'
const ManageUsers = () => {
  const { data: users = [], refetch } = useQuery(["users"], async () => {
    const res = await axios.get("https://photo-safari-camp-server.vercel.app/users", {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("access-token")}`,
      }
    });
    return res?.data;
  });


  const handleAdmin = (id) => {
    
    fetch(`https://photo-safari-camp-server.vercel.app/users/admin/${id}`, {
        method: 'PATCH',

    })
    .then(res => res.json())
    .then(data => {
        if(data.modifiedCount > 0){
            refetch()
            Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'The user is Admin Now',
                showConfirmButton: false,
                timer: 1500
              })
        }
    })
  };

  const handleInstructor = (id) => {
    
    fetch(`https://photo-safari-camp-server.vercel.app/users/instructor/${id}`, {
      method: 'PATCH',
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          refetch();
          Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'The user is now an Instructor',
            showConfirmButton: false,
            timer: 1500
          });
        }
      });
  };
  

  
  return (
    <div className="w-full xl:px-32">
      <h3 className="font-bold text-2xl">Total Users: {users.length}</h3>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={user._id}>
                <th>{index + 1}</th>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.role}</td>
                <td>
                  {user.role === "admin" ? (
                    "Admin"
                  ) : user.role === "student" ? (
                    <>
                      <button
                        onClick={() => handleAdmin(user._id)}
                        className="btn btn-error"

                      >
                        Make Admin
                      </button>
                      <button
                        onClick={() => handleInstructor(user._id)}
                        className="btn btn-error"

                      >
                        Make Instructor
                      </button>
                    </>
                  ) : user.role === "instructor" ? (
                    <button
                      onClick={() => handleAdmin(user._id)}
                      className="btn btn-error"
                    >
                      Make Admin
                    </button>
                  ) : (
                    user.role
                  )}
                </td>
                
                
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageUsers;
