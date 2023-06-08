import { useContext } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";

const Login = () => {
  const { user } = useContext(AuthContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();

  const onSubmit = data => {
    console.log(data);
  }

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
              
            </div>
            
            
            <div className="form-control mt-6">
              <input
                type="submit"
                className="btn btn-primary "
                value="Login"
                
              />
            </div>
            <div className="text-center">
              <p>
                New to Photo Safari Camp? <Link to="/register">Please Register</Link>{" "}
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
