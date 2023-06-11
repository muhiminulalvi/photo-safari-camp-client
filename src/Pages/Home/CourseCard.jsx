import { useContext } from "react";
import {  useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";
import useCart from "../../hooks/useCart";
import axios from "axios";
import useAdmin from "../../hooks/useAdmin";
import useInstructor from "../../hooks/useInstructor";

const CourseCard = ({ course }) => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate()
  const location = useLocation()
  const [cart , refetch] = useCart()
  const {
    _id,
    name,
    instructor,
    image,
    availableSeats,
    price,
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
      axios.post('http://localhost:5000/carts', cartItem, {
        headers: {
              // 'content-type': 'application/json',
              'Authorization': `Bearer ${localStorage.getItem("access-token")}`
            },
      })
        .then((data) => {
          if (data?.data.insertedId) {
            refetch()
            Swal.fire({
              position: "center",
              icon: "success",
              title: "Course Added in The Cart Successfully",
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

  const isSeatsAvailable = availableSeats > 0;
const [isAdmin] = useAdmin()
const [isInstructor] = useInstructor()
  const isAdminOrInstructor = user && ( isAdmin || isInstructor);
  const isButtonDisabled = !isSeatsAvailable || isAdminOrInstructor;
  return (
    <div className={`card w-full h-full ${availableSeats === 0 ? 'bg-error' : 'bg-yellow-50'} shadow-xl `}>
      <figure>
        <img src={image} alt="Shoes" className="w-full h-64" />
      </figure>
      <div className="card-body">
        <h2 className="card-title font-bold text-xl">{name}</h2>
        <p className="font-semibold">Instructor: {instructor}</p>
        <p className="font-semibold">Available Seats: {availableSeats}</p>
        <p className="font-semibold">Price: ${price}</p>
        <div className="card-actions justify-start">

          <button
            className={`btn btn-primary font-bold ${isButtonDisabled ? "opacity-50 cursor-not-allowed" : ""}`}
            onClick={() => handleAddToCart(course)}
            disabled={isButtonDisabled}
          >
            Enroll Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
