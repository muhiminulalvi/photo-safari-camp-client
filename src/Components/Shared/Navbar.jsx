import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import { FaUserShield } from "react-icons/fa";
import { HiShoppingCart } from "react-icons/hi";
import useCart from "../../hooks/useCart";


const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [cart] = useCart()

  const navOptions = (
    <>
      <li>
        <Link to="/" className="font-bold text-[20px] ">
          Home
        </Link>
      </li>
      <li>
        <Link to="/instructors" className="font-bold text-[20px] ">
          Instructors
        </Link>
      </li>
      <li>
        <Link to="/classes" className="font-bold text-[20px] ">
          Classes
        </Link>
      </li>
      <li>
        <Link to="/dashboard" className="font-bold text-[20px] ">
          Dashboard
        </Link>
      </li>
      {user && (
        <li>
          <Link className="">
              <HiShoppingCart size={20} color="#000000"></HiShoppingCart>
              <span className="badge badge-error">+{cart?.length || 0}</span>
          </Link>
        </li>
      )}
    </>
  );
  const handleLogOut = () => {
    logOut()
      .then()
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="bg-primary border-b-2 border-primary shadow-md py-4">
      <div className="navbar max-w-[1920px] mx-auto xl:px-20 md:px-10 sm:px-2">
        <div className="navbar-start">
          <div className="dropdown z-10">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navOptions}
            </ul>
          </div>
          <Link to="/" className="font-bold text-xl uppercase  tracking-wide">
            Photo Safari Camp
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navOptions}</ul>
        </div>
        <div className="navbar-end">
          {user ? (
            <div className="flex flex-row items-center gap-5">
              <label
                className="tooltip"
                data-tip={`${user.displayName ? user.displayName : ""}`}
              >
                <div className="w-10 ">
                  {user.photoURL ? (
                    <img
                      src={`${user?.photoURL}`}
                      alt=""
                      className="rounded-full w-10"
                    />
                  ) : (
                    <FaUserShield size={30} color="#ff3811" />
                  )}
                </div>
              </label>
              <button
                className="btn btn-error text-white font-bold"
                onClick={handleLogOut}
              >
                Log Out
              </button>
            </div>
          ) : (
            <Link
              to="/login"
              className="btn btn-error text-white rounded-md font-bold"
            >
              Login
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
