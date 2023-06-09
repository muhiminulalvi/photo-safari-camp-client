import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";
import useCart from "../../hooks/useCart";

const CourseCard = ({ course }) => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate()
  const location = useLocation()
  const [cart , refetch] = useCart()
  const {
    _id,
    name,
    category,
    instructor,
    image,
    availableSeats,
    price,
    studentsEnrolled,
  } = course || {};

  const handleAddToCart = (course) => {
    console.log(course);
    if (user && user.email) {
      const cartItem = {courseId: _id, name,image, price, email: user.email}

      const alreadyCourseInCart = cart.find(item => item.courseId === course._id);

      if(alreadyCourseInCart){
        Swal.fire({
          position: "center",
          icon: "info",
          title: "Course already added to the cart",
          showConfirmButton: false,
          timer: 1500,
        });
        return;
      }
      fetch("http://localhost:5000/carts", {
        method: 'POST',
        headers: {
          'content-type': 'application/json'
        },
        body: JSON.stringify(cartItem)
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.insertedId) {
            refetch()
            Swal.fire({
              position: "center",
              icon: "success",
              title: "Course Added in The Cart Succesfully",
              showConfirmButton: false,
              timer: 1500,
            });
          }
          
        });
    }
    else {
      Swal.fire({
        title: 'Please Login to Enroll the Course',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Login Now'
      }).then((result) => {
        if (result.isConfirmed) {
          navigate('/login', {state: {from: location}})
        }
      })
    }
  };
  return (
    <div className="card w-full h-full bg-yellow-50 shadow-xl ">
      <figure>
        <img src={image} alt="Shoes" className="w-full h-80" />
      </figure>
      <div className="card-body">
        <h2 className="card-title font-bold text-xl">{name}</h2>
        <p className="font-semibold">Category: {category}</p>
        <p className="font-semibold">Instructor: {instructor}</p>
        <p className="font-semibold">Student Enrolled: {studentsEnrolled}</p>
        <p className="font-semibold">Available Seats: {availableSeats}</p>
        <p className="font-semibold">Price: ${price}</p>
        <div className="card-actions justify-start">
          <Link
            className="btn btn-primary"
            onClick={() => handleAddToCart(course)}
          >
            Enroll Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
