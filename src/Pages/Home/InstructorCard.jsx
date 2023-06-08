

const InstructorCard = ({instructor}) => {
    const {
        // _id,
        name,
        email,
        image,
        studentsEnrolled,
      } = instructor || {};
    //   console.log(image);
    return (
        <div className="card w-full h-full bg-slate-50 shadow-xl">
      <figure>
        <img
          src={image}
          alt="Shoes"
          className="w-full h-80"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title font-bold text-xl">{name}</h2>
        <p className="font-semibold">Email: {email}</p>
        <p className="font-semibold">Students Enrolled: {studentsEnrolled}</p>

      </div>
    </div>
    );
};

export default InstructorCard;