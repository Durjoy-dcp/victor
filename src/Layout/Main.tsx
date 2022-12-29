import React from "react";
import { Outlet } from "react-router-dom";
import NavHeader from "../Components/NavHeader/NavHeader";
import toast, { Toaster } from "react-hot-toast";
import SocialLogin from "../Components/SocialLogin/SocialLogin";

const Main: React.FC = () => {
  return (
    <div>
      <NavHeader></NavHeader>
      <SocialLogin></SocialLogin>
      <Toaster />
      <Outlet></Outlet>
    </div>
  );
};

export default Main;
