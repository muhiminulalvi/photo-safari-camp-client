import { useContext } from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";

const Register = () => {
  const { createUser, updateUserProfile } =
    useContext(AuthContext);
  const {
    register,
    handleSubmit,
    formState: { errors, isDirty },
    watch,
  } = useForm();

  const password = watch("password");
  const confirm_password = watch("confirm_password");
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const onSubmit = (data) => {
    console.log(data);
    createUser(data.email, data.password)
      .then((result) => {
        const loggedInUser = result.user;
        console.log(loggedInUser);
        updateUserProfile(data.name, data.photoURL)
          .then(() => navigate(from, {replace: true}))
          .catch((err) => console.log(err));
      })
      .catch((err) => console.log(err));
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
                className={`btn btn-primary ${!isDirty || confirm_password !== password ? "opacity-80 cursor-not-allowed" : ""}`}
                value="Register"
                disabled={!isDirty || confirm_password !== password}
              />
            </div>
            <div className="text-center">
              <p>
                Already have an account? <Link to="/login">Please Login</Link>{" "}
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
