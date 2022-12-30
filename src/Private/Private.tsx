import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import Spinner from "../Components/Spinner/Spinner";
import { AuthContext } from "../Context/AuthProvider";
interface IPrivate {
  children: React.ReactNode;
}

const Private: React.FC<IPrivate> = ({ children }): any => {
  const { loading, user } = useContext(AuthContext);
  let location = useLocation();
  if (loading) {
    return <Spinner></Spinner>;
  }
  if (user && user.uid) {
    if (children) {
    }
    return children;
  }

  return <Navigate to="/login" state={{ from: location }} replace />;
};

export default Private;
