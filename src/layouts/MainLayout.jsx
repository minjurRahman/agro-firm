import React from "react";
import Navbar from "../pages/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../pages/Footer";

const MainLayout = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default MainLayout;
