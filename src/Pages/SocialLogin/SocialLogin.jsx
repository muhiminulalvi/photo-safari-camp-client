import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";

const SocialLogin = () => {
  const { googleLogin } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const handleGoogleLogIn = () => {
    googleLogin().then((result) => {
      const loggedUser = result.user;
      console.log(loggedUser);
      const saveUser = {
        name: loggedUser.displayName,
        email: loggedUser.email,
      };
      fetch("http://localhost:5000/users", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(saveUser),
      })
        .then((res) => res.json())
        .then(() => {
          navigate(from, { replace: true });
        });
    });
  };
  return (
    <div>
      <div className="divider">OR</div>
      <button
        onClick={handleGoogleLogIn}
        className="btn btn-primary font-bold rounded-none"
      >
        Continue with Google
      </button>
    </div>
  );
};

export default SocialLogin;
