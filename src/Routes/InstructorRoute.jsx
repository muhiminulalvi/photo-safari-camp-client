import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import useInstructor from "../hooks/useInstructor";


const InstructorRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const [isInstructor, isInstructorLoading] = useInstructor()
  const location = useLocation();

//   console.log(location);
  if (user && isInstructor) {
    return children;
  }
  if (loading || isInstructorLoading) {
    return <progress className="progress w-56"></progress>;
  }
  return <Navigate state={{ from: location }} to="/login" replace></Navigate>;
};

export default InstructorRoute;
