import { Link } from "react-router-dom";

const Login = () => {
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
          <form className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                placeholder="Your Name"
                className="input input-bordered bg-white"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="Your Email"
                className="input input-bordered bg-white"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="Your Password"
                className="input input-bordered bg-white"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Confirm Password</span>
              </label>
              <input
                type="password"
                placeholder="Confirm Password"
                className="input input-bordered bg-white"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Photo URL</span>
              </label>
              <input
                type="url"
                placeholder="Your Photo URL"
                className="input input-bordered bg-white"
              />
            </div>
            <div className="form-control mt-6">
              <input
                type="submit"
                className="btn btn-primary"
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
