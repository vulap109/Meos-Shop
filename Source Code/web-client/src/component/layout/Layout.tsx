import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

function Layout() {
  return (
    <>
      <div className="bg-light">
        {/* page header */}
        <Header />

        {/* page content */}
        <Outlet />

        {/* page footer */}
        <Footer />
      </div>
    </>
  );
}

export default Layout;
