import { useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../../Provider/AuthProvider";
import axios from "axios";
import Swal from "sweetalert2";

const image_hosting_token = import.meta.env.VITE_IMAGE_UPLOAD_TOKEN;

const AddClass = () => {
  const { user } = useContext(AuthContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm({
    defaultValues: {
      studentsEnrolled: 0,
    },
  });
  const img_hosting_url = `https://api.imgbb.com/1/upload?key=${image_hosting_token}`;

  const onSubmit = (data) => {
    // Handle form submission, e.g., send data to the server

    const formData = new FormData();
    formData.append("image", data.image[0]);

    fetch(img_hosting_url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imgRes) => {
        if (imgRes.success) {
          const imgURL = imgRes.data.display_url;
          const {
            name,
            instructor,
            email,
            price,
            availableSeats,
            studentsEnrolled,
          } = data;
          const newCourse = {
            name,
            instructor,
            email,
            price: parseFloat(price),
            availableSeats: parseInt(availableSeats),
            studentsEnrolled: parseInt(studentsEnrolled),
            image: imgURL,
            status: 'pending'
          };
          console.log(newCourse);
          axios.post('http://localhost:5000/classes', newCourse, {
            headers: {
                // 'content-type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem("access-token")}`
              },
          })
          .then(data => {
            console.log("new data", data.data);
            if(data.data.insertedId){
                reset()
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: "Class is Added Successfully",
                    showConfirmButton: false,
                    timer: 1500,
                  });
            }
          })
        }
      });

  };

  return (

    <div className="w-full">
      <h2 className="font-bold text-4xl text-center">Add a class</h2>
      <div className="card flex-shrink-0 w-full bg-base-100">
        <div className="card-body">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Class Name*</span>
              </label>
              <input
                type="text"
                placeholder="Class Name"
                className={`input input-bordered ${
                  errors.name ? "input-error" : ""
                }`}
                {...register("name", { required: true })}
              />
              {errors.name && (
                <span className="text-xs text-red-500">
                  Class Name is required
                </span>
              )}
            </div>
            <div className="flex items-center justify-between gap-5">
              {/* Instructor Name */}
              <div className="form-control w-1/2">
                <label className="label">
                  <span className="label-text">Instructor Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Instructor Name"
                  className="input input-bordered"
                  readOnly
                  value={user?.displayName}
                  {...register("instructor", { required: true })} // Replace 'user?.displayName' with your actual instructor name value
                />
              </div>
              {/* Instructor Email */}
              <div className="form-control w-1/2">
                <label className="label">
                  <span className="label-text">Instructor Email</span>
                </label>
                <input
                  type="email"
                  placeholder="Instructor Email"
                  className="input input-bordered"
                  readOnly
                  value={user?.email}
                  {...register("email", { required: true })} // Replace 'user?.email' with your actual instructor email value
                />
              </div>
            </div>
            <div className="flex items-center justify-between gap-5">
              {/* Available Seats */}
              <div className="form-control w-1/2">
                <label className="label">
                  <span className="label-text">Available Seats*</span>
                </label>
                <input
                  type="number"
                  placeholder="Available Seats"
                  className={`input input-bordered ${
                    errors.availableSeats ? "input-error" : ""
                  }`}
                  {...register("availableSeats", { required: true })}
                />
                {errors.availableSeats && (
                  <span className="text-xs text-red-500">
                    Available Seats is required
                  </span>
                )}
              </div>
              {/* Price */}
              <div className="form-control w-1/2">
                <label className="label">
                  <span className="label-text">Price*</span>
                </label>
                <input
                  type="number"
                  placeholder="Price"
                  className={`input input-bordered ${
                    errors.price ? "input-error" : ""
                  }`}
                  {...register("price", { required: true })}
                />
                <input
                  type="number"
                  placeholder="Enrolled Students"
                  className="input input-bordered"
                  hidden
                  {...register("studentsEnrolled", {
                    defaultValue: 0,
                  })}
                />

                {errors.price && (
                  <span className="text-xs text-red-500">
                    Price is required
                  </span>
                )}
              </div>
              {/* Upload Image */}
              <div className="form-control w-full max-w-xs">
                <label className="label">
                  <span className="label-text">Upload Image*</span>
                </label>
                <input
                  type="file"
                  className="file-input file-input-bordered w-full max-w-xs"
                  {...register("image", { required: true })}
                />
                {errors.image && (
                  <span className="text-xs text-red-500">
                    Image is required
                  </span>
                )}
              </div>
            </div>
            <div className="form-control mt-6">
              <input
                className="btn btn-secondary"
                type="submit"
                value="Add Class"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddClass;
