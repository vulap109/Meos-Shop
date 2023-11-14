import React from "react";
import { NavLink } from "react-router-dom";
import imgError from "../../assets/images/unauthorized-img.jpg";

const Unauthorized = () => {
  return (
    <>
      {/* <!-- Error --> */}
      <div className="container-xxl container-p-y">
        <div className="misc-wrapper">
          <h2 className="mb-2 mx-2">401</h2>
          <p className="mb-4 mx-2">You are unauthorized, please sign in ...</p>
          <NavLink to="/sign-in" className="btn btn-primary">
            Sign in now
          </NavLink>
          <div className="mt-3">
            <img
              src={imgError}
              alt="page-misc-error-light"
              width="500"
              className="img-fluid"
              data-app-dark-img="illustrations/page-misc-error-dark.png"
              data-app-light-img="illustrations/page-misc-error-light.png"
            />
          </div>
        </div>
      </div>
      {/* <!-- /Error --> */}
    </>
  );
};

export default Unauthorized;
