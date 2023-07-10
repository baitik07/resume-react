import React from "react";
import Header from "../components/Header";
import { Outlet } from "react-router-dom";
import Ends from "../components/Ends";

const MainLayout = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <Ends />
    </div>
  );
};

export default MainLayout;
