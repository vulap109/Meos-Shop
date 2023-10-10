import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

function Layout() {
  return (
    <>
      {/* page header */}
      <Header />

      {/* page content */}
      <Outlet />

      {/* page footer */}
      <Footer />
    </>
  );
}

export default Layout;
