import React from "react";
import { Outlet } from "react-router-dom";
import LeftSideBar from "./LeftSideBar";
import Header from "./Header";
import Footer from "./Footer";

// Core CSS
import "../../assets/vendor/css/core.css";
import "../../assets/vendor/css/theme-default.css";
import "../../styles/demo.css";
// Vendors CSS
import "../../assets/vendor/libs/perfect-scrollbar/perfect-scrollbar.css";
import "../../assets/vendor/libs/apex-charts/apex-charts.css";
import CustomModal from "../custom/CustomModal";
import { useSelector } from "react-redux";

const Layout = () => {
  const { modalOpen, message, confirmation, handleClose, handleSuccess } =
    useSelector((state: state) => state.modalState);

  return (
    <>
      {/* <!-- Layout wrapper --> */}
      <div className="layout-wrapper layout-content-navbar">
        <div className="layout-container">
          {/* <!-- Menu --> */}
          <LeftSideBar />
          {/* <!-- / Menu --> */}

          {/* <!-- Layout container --> */}
          <div className="layout-page">
            {/* <!-- Navbar --> */}

            <nav
              className="layout-navbar container-xxl navbar navbar-expand-xl navbar-detached align-items-center bg-navbar-theme"
              id="layout-navbar"
            >
              {/* hearder */}
              <Header />
            </nav>

            {/* <!-- / Navbar --> */}

            {/* <!-- Content wrapper --> */}
            <div className="content-wrapper">
              {/* <!-- Content --> */}

              <div className="container-xxl flex-grow-1 container-p-y">
                {/* outlet */}
                <Outlet />
              </div>
              {/* <!-- / Content --> */}

              {/* <!-- Footer --> */}
              <Footer />
              {/* <!-- / Footer --> */}
            </div>
            {/* <!-- Content wrapper --> */}
          </div>
          {/* <!-- / Layout page --> */}
        </div>
      </div>
      {/* <!-- / Layout wrapper --> */}

      {/* modal confirm delete category */}
      <CustomModal
        isOpen={modalOpen}
        handleClose={handleClose}
        confirmation={confirmation}
        message={message}
        handleSuccess={handleSuccess}
      />
    </>
  );
};

export default Layout;
