import React, { useContext, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider";
import { UserCredential } from "firebase/auth";
const SocialLogin: React.FC = () => {
  const { googleSignIn } = useContext(AuthContext);
  const [loggedUserEmail, setLoggedUserEmail] = useState("");

  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";

  const handleToSignIn = () => {
    googleSignIn()
      .then((res) => console.log(res))
      .catch((er) => console.log(er));
  };
  return (
    <div>
      <button className="btn  w-full" onClick={handleToSignIn}>
        CONTINUE WITH GOOGLE
      </button>
    </div>
  );
};

export default SocialLogin;
