

const InstructorCard = ({instructor}) => {
    const {
        // _id,
        name,
        email,
        image
      } = instructor || {};
    //   console.log(image);
    return (
        <div className="card w-full h-full bg-slate-50 shadow-xl rounded-none">
      <figure>
        <img
          src={image}
          alt="Shoes"
          className="w-full h-64"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title font-bold text-xl">{name}</h2>
        <p className="font-semibold">Email: {email}</p>

      </div>
    </div>
    );
};

export default InstructorCard;