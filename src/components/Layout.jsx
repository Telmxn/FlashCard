import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import React from 'react';


const Layout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
