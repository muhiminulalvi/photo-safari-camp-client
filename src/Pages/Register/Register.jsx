import { useContext } from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import SocialLogin from "../SocialLogin/SocialLogin";
import Swal from "sweetalert2";

const Register = () => {
  const { createUser, updateUserProfile } = useContext(AuthContext);
  const {
    register,
    handleSubmit,
    formState: { errors, isDirty },
    watch,
    reset,
  } = useForm();

  const password = watch("password");
  const confirm_password = watch("confirm_password");
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const onSubmit = (data) => {
    createUser(data.email, data.password)
      .then((result) => {
        const loggedInUser = result.user;
        console.log(loggedInUser);
        updateUserProfile(data.name, data.photoURL)
          .then(() => {
            const saveUser = { name: data.name, email: data.email, image: data.photoURL, role: 'student' };
            fetch("http://localhost:5000/users", {
              method: "POST",
              headers: {
                "content-type": "application/json",
              },
              body: JSON.stringify(saveUser),
            })
              .then((res) => res.json())
              .then((data) => {
                if (data.insertedId) {
                  reset();
                  Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'You are now a registered User',
                    showConfirmButton: false,
                    timer: 1500
                  })
                  navigate(from, { replace: true });
                }
              });
          })
          .catch((err) => {
            console.log(err)
            alert('Please Provide Correct Information')
          });
      })
      .catch((err) => {
        console.log(err)
        alert('Give Correct Information')
      });
  };

  return (
    <div className="max-w-[1920px] mx-auto xl:px-28 md:px-10 sm:px-4 bg-white">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div>
          <img
            src="https://img.freepik.com/free-vector/security-concept-illustration_114360-497.jpg"
            alt=""
          />
        </div>
        <div>
          <form className="card-body" onSubmit={handleSubmit(onSubmit)}>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                name="name"
                type="text"
                placeholder="Your Name"
                className="input input-bordered bg-white"
                {...register("name", { required: true })}
              />
              {errors.name?.type === "required" && (
                <span className="font-bold text-error">Name is required</span>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                name="email"
                type="email"
                placeholder="Your Email"
                className="input input-bordered bg-white"
                {...register("email", { required: true })}
              />
              {errors.email?.type === "required" && (
                <span className="font-bold text-error">Email is required</span>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="Your Password"
                className="input input-bordered bg-white"
                {...register("password", {
                  required: true,
                  minLength: 6,
                  maxLength: 20,
                  pattern: /(?=.*[A-Z])(?=.*[!@#$&*])/,
                })}
              />
              <label className="">
                <p className="label-text">* Password must be 6 characters long.</p>
                <p className="label-text">* Maximum Length of the password should be 20 characters.</p>
                <p className="label-text">* Password should contain an uppercase and a special character.</p>
              </label>
              {errors.password?.type === "required" && (
                <span className="font-bold text-error">
                  Password is required.
                </span>
              )}
              {errors.password?.type === "minLength" && (
                <span className="font-bold text-error">
                  Password must be 6 characters.
                </span>
              )}
              {errors.password?.type === "maxLength" && (
                <span className="font-bold text-error">
                  Password must be less than 20 characters,
                </span>
              )}
              {errors.password?.type === "pattern" && (
                <span className="font-bold text-error">
                  Password must have a capital letter and a special character.
                </span>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Confirm Password</span>
              </label>
              <input
                type="password"
                name="confirm_password"
                placeholder="Confirm Password"
                className="input input-bordered bg-white"
                {...register("confirm_password", {
                  required: true,
                  validate: (value) => value === password,
                })}
              />
              {errors.confirm_password?.type === "required" && (
                <span className="font-bold text-error">
                  Confirm Password is required
                </span>
              )}
              {password !== confirm_password && (
                <span className="font-bold text-error">
                  Password and Confirm Password do not match
                </span>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Photo URL</span>
              </label>
              <input
                name="photoURL"
                type="url"
                placeholder="Your Photo URL"
                className="input input-bordered bg-white"
                {...register("photoURL", { required: true })}
              />
              {errors.photoURL?.type === "required" && (
                <span className="font-bold text-error">
                  Photo URL is required
                </span>
              )}
            </div>
            <div className="form-control mt-6">
              <input
                type="submit"
                className={`btn btn-primary ${
                  !isDirty || confirm_password !== password
                    ? "opacity-80 cursor-not-allowed"
                    : ""
                }`}
                value="Register"
                disabled={!isDirty || confirm_password !== password}
              />
            </div>
          </form>
          <div className="text-center card-body">
            <SocialLogin></SocialLogin>
            <p>
              Already have an account? <Link to="/login">Please Login</Link>{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
