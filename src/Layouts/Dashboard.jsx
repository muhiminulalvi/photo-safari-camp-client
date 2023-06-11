import { useContext } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import { FaChalkboard, FaChalkboardTeacher, FaHome, FaHourglassHalf, FaHouseUser, FaReceipt, FaSchool, FaUserGraduate, FaUserSecret, FaUserShield, FaUserTie, FaUsers, FaWind } from "react-icons/fa";
import useAdmin from "../hooks/useAdmin";
import useInstructor from "../hooks/useInstructor";

const Dashboard = () => {
  const { user } = useContext(AuthContext);
  // todo
  // const isAdmin = true;
  const [isAdmin] = useAdmin()
  const [isInstructor] = useInstructor()
  return (
    <div className="">
      <div className="drawer lg:drawer-open ">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center justify-center">
          <Outlet></Outlet>
          <label
            htmlFor="my-drawer-2"
            className="btn btn-primary drawer-button lg:hidden"
          >
            Open drawer
          </label>
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 h-full bg-secondary text-white font-bold text-xl space-y-4">
            {isAdmin ? (
              <>
                <li>
                  <NavLink to="adminhome"> <FaUserSecret></FaUserSecret> Admin Home</NavLink>
                </li>
                <li>
                  <NavLink to="manageclasses"> <FaSchool></FaSchool> Manage Classes</NavLink>
                </li>
                <li>
                  <NavLink to="manageusers"> <FaUsers></FaUsers> Manage Users</NavLink>
                </li>
              </>
            ) : isInstructor ? (
              <>
                <li>
                  <NavLink to="instructorhome"> <FaChalkboardTeacher></FaChalkboardTeacher> Instructor Home</NavLink>
                </li>
                <li>
                  <NavLink to="addclass"> <FaChalkboard></FaChalkboard> Add A Class</NavLink>
                </li>
                <li>
                  <NavLink to="myclass"> <FaWind></FaWind> My Class</NavLink>
                </li>
               
              </>
            ) : (
              <>
                <div className="flex flex-col items-center justify-center py-8">
                  <div className="w-20 text-center">
                    {user?.photoURL ? (
                      <img
                        src={`${user?.photoURL}`}
                        alt=""
                        className="rounded-full w-10"
                      />
                    ) : (
                      <FaUserShield size={30} color="#ff3811" />
                    )}
                  </div>
                  <h2 className="pt-3">{user?.displayName}</h2>
                </div>
                <hr />
                <li>
                  <NavLink to="userhome"> <FaHouseUser></FaHouseUser> User Home</NavLink>
                </li>
                <li>
                  <NavLink to="mycart"> <FaSchool></FaSchool> My Selected Class</NavLink>
                </li>
                <li>
                  <NavLink to="enrolledclasses"> <FaUserGraduate></FaUserGraduate> My Enrolled Class</NavLink>
                </li>
                <li>
                  <NavLink to="paymenthistory"> <FaReceipt></FaReceipt> Payment History</NavLink>
                </li>
              </>
            )}
            <hr />
            <li>
              <NavLink to="/"> <FaHome></FaHome> Home Page</NavLink>
            </li>
            <li>
              <NavLink to="/classes"> <FaHourglassHalf></FaHourglassHalf> All Classes</NavLink>
            </li>
            <li>
              <NavLink to="/instructors"> <FaUserTie></FaUserTie> Instructors</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
