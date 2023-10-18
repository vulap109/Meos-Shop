import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import "../../styles/Banner.scss";

function Layout() {
  const [windowSize, setWindowSize] = useState(getWindowSize());
  const [widthBanner, setWidthBanner] = useState(0);

  function getWindowSize() {
    const { innerWidth } = window;
    return innerWidth;
  }

  useEffect(() => {
    const setBanner = () => {
      if (windowSize >= 1560) {
        let wid = (windowSize - 1320) / 2 - 120;
        setWidthBanner(wid);
      }
    };
    setBanner();
  }, [windowSize]);
  useEffect(() => {
    function handleWindowResize() {
      setWindowSize(getWindowSize());
    }
    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  return (
    <>
      <div className="bg-light">
        {/* page header */}
        <Header />

        {/* banner */}
        <div className="position-relative banner-container">
          <div
            className="position-absolute"
            style={{ top: "100px", left: widthBanner }}
          >
            <img
              src="https://file.hstatic.net/200000722513/file/side_web__1__624412a83eea4c8c82d8e7639a7c9567.png"
              alt=""
              style={{ height: "400px", width: "120px" }}
            />
          </div>
          <div
            className="position-absolute"
            style={{ top: "100px", right: widthBanner }}
          >
            <img
              src="https://file.hstatic.net/200000722513/file/side_web__1__624412a83eea4c8c82d8e7639a7c9567.png"
              alt=""
              style={{ height: "400px", width: "120px" }}
            />
          </div>
        </div>

        {/* page content */}
        <Outlet />

        {/* page footer */}
        <Footer />
      </div>
    </>
  );
}

export default Layout;
