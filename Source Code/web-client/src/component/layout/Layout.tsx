import React, { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import StickyBanner from "../banner/StickyBanner";
import "../../styles/Banner.scss";

function Layout() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <>
      <div className="bg-light">
        {/* page header */}
        <Header />

        {/* banner */}
        <StickyBanner />

        {/* page content */}
        <Outlet />

        {/* page footer */}
        <Footer />
      </div>
    </>
  );
}

export default Layout;
