import { useQuery } from "@tanstack/react-query";
import Swal from 'sweetalert2'
const ManageUsers = () => {
  const { data: users = [], refetch } = useQuery(["users"], async () => {
    const res = await fetch("http://localhost:5000/users");
    return res.json();
  });

  const handleAdmin = (id) => {
    fetch(`http://localhost:5000/users/admin/${id}`, {
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
    fetch(`http://localhost:5000/users/instructor/${id}`, {
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
  

  const handleDelete = (user) => {};
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
              <th>Change Role</th>

              <th>Action</th>
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
                
                <td>
                  <button
                    onClick={() => handleDelete(user)}
                    className="btn btn-error"
                  >
                    Delete
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

export default ManageUsers;
