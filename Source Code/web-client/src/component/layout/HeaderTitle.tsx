import React from "react";
import { NavLink } from "react-router-dom";

const HeaderTitle = ({ data }: { data: breadcrumbProps[] }) => {
  return (
    <>
      {/* Heading */}
      <div className="bg-primary">
        <div className="container py-1">
          {/* Breadcrumb */}
          <nav className="d-flex my-2">
            <p className="mb-0 d-flex flex-row">
              {
                data ?
                  data.map((item, index) =>
                    <span className="d-flex" key={`bc${index}`}>
                      {index > 0 && <span className="text-white mx-2"> / </span>}
                      <NavLink to={item.url} className="text-white nav-link" >
                        {item.titleName === "Trang chủ" && <i className="fa-solid fa-house pe-2"></i>}{item.titleName}
                      </NavLink>
                    </span>)
                  :
                  <NavLink to="/" className="text-white nav-link">
                    <i className="fa-solid fa-house pe-2"></i>Trang chủ
                  </NavLink>
              }
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
