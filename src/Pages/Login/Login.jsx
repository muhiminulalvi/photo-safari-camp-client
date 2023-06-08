import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import { RiEyeFill, RiEyeOffFill } from "react-icons/ri";

const Login = () => {
  const { signIn } = useContext(AuthContext);
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();
  const location = useLocation()
  const from = location.state?.from?.pathname || '/'
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const togglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  const onSubmit = (data) => {
    signIn(data.email, data.password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        navigate(from, { replace: true });
      })
      .catch((err) => {
        console.log(err);
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
                <span className="label-text">Email</span>
              </label>
              <input
                name="email"
                type="email"
                placeholder="Your Email"
                className="input input-bordered bg-white rounded-none"
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
              <div className="w-full flex">
                <input
                  type={showPassword ? 'text' : 'password'}
                  name="password"
                  placeholder="Your Password"
                  className="input input-bordered rounded-none border-r-0 bg-white w-11/12"
                  {...register('password', {
                    required: true,
                  })}
                />
                <button
                  type="button"
                  className="bg-primary input-bordered input border-l-0 rounded-none w-1/12"
                  onClick={togglePasswordVisibility}
                >
                  {showPassword ? <RiEyeFill /> : <RiEyeOffFill />}
                </button>
              </div>
              {errors.password?.type === "required" && (
                <span className="font-bold text-error">
                  Password is required.
                </span>
              )}
            </div>

            <div className="form-control mt-6">
              <input type="submit" className="btn btn-primary rounded-none" value="Login" />
            </div>
            <div className="text-center">
              <p>
                New to Photo Safari Camp?{" "}
                <Link to="/register">Please Register</Link>{" "}
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
