import { Link } from "react-router-dom";

const CourseCard = ({ course }) => {
  const {
    // _id,
    name,
    category,
    instructor,
    image,
    // availableSeats,
    price,
    // studentsEnrolled,
  } = course || {};
  return (
    <div className="card w-full h-full bg-yellow-50 shadow-xl">
      <figure>
        <img
          src={image}
          alt="Shoes"
          className="w-full h-80"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title font-bold text-xl">{name}</h2>
        <p className="font-semibold">Category: {category}</p>
        <p className="font-semibold">Instructor: {instructor}</p>
        <p className="font-semibold">Price: ${price}</p>
        <div className="card-actions justify-start">
          <Link className="btn btn-primary">Add To Cart</Link>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
