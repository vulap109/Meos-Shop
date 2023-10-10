import React from "react";
import { NavLink } from "react-router-dom";

const HeaderTitle = () => {
  return (
    <>
      {/* Heading */}
      <div className="bg-primary mb-4">
        <div className="container py-4">
          <h3 className="text-white mt-2">Men's wear</h3>
          {/* Breadcrumb */}
          <nav className="d-flex mb-2">
            <h6 className="mb-0 d-flex flex-row">
              <NavLink to="" className="text-white-50 nav-link">
                Home
              </NavLink>
              <span className="text-white-50 mx-2"> / </span>
              {/* <i className="fa-solid fa-chevron-right"></i> */}
              <NavLink to="" className="text-white-50 nav-link">
                Library
              </NavLink>
              <span className="text-white-50 mx-2"> / </span>
              {/* <i className="fa-solid fa-chevron-right"></i> */}
              <NavLink to="" className="text-white nav-link">
                <u>Data</u>
              </NavLink>
            </h6>
          </nav>
          {/* Breadcrumb */}
        </div>
      </div>
      {/* Heading */}
    </>
  );
};

export default HeaderTitle;
