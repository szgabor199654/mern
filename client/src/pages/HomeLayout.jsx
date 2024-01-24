import React from "react";
import { Outlet } from "react-router-dom";

const HomeLayout = () => {
  return (
    <div>
      <Outlet />
      <h1>HomeLayout</h1>
    </div>
  );
};

export default HomeLayout;
