import React from "react";
import { Outlet } from "react-router-dom";
import NavHeader from "../Components/NavHeader/NavHeader";
import toast, { Toaster } from "react-hot-toast";

const Main: React.FC = () => {
  return (
    <div>
      <NavHeader></NavHeader>
      <Toaster />
      <Outlet></Outlet>
    </div>
  );
};

export default Main;
