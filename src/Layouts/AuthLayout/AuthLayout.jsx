import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import { Outlet } from "react-router";

const AuthLayout = () => {
  return (
    <div className="bg-base-200">
      <header className="w-11/12 mx-auto  pt-13">
        <Navbar></Navbar>
      </header>
      <Outlet></Outlet>
    </div>
  );
};

export default AuthLayout;
