import React from "react";
import { NavLink } from "react-router-dom";

const HeaderTitle = () => {
  return (
    <>
      {/* Heading */}
      <div className="bg-primary">
        <div className="container py-1">
          {/* Breadcrumb */}
          <nav className="d-flex my-2">
            <p className="mb-0 d-flex flex-row">
              <NavLink to="" className="text-white nav-link">
                <i className="fa-solid fa-house pe-2"></i>Trang chủ
              </NavLink>
              <span className="text-white mx-2"> / </span>
              <NavLink to="" className="text-white nav-link">
                Sản phẩm
              </NavLink>
              <span className="text-white mx-2"> / </span>
              <NavLink to="" className="text-white nav-link">
                <u>Dữ liệu</u>
              </NavLink>
            </p>
          </nav>
          {/* Breadcrumb */}
        </div>
      </div>
      {/* Heading */}
    </>
  );
};

export default HeaderTitle;
