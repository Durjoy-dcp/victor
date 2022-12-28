import React from "react";
import { Outlet } from "react-router-dom";
import NavHeader from "../Components/NavHeader/NavHeader";

const Main: React.FC = () => {
  return (
    <div>
      <NavHeader></NavHeader>
      <Outlet></Outlet>
    </div>
  );
};

export default Main;
