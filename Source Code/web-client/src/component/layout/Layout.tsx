import React, { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import StickyBanner from "../banner/StickyBanner";
import "../../styles/Banner.scss";
import { useSelector } from "react-redux";
import Loading from "../customComponent/Loading";

function Layout() {
  const location = useLocation();
  const { isLoading } = useSelector((state: state) => state.authState);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  if (isLoading) {
    return (
      <div className="d-flex min-vh-100">
        <Loading />
      </div>
    );
  }

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
