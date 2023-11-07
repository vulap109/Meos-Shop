import React from "react";
import { NavLink } from "react-router-dom";
import imgError from "../../assets/images/girl-doing-yoga-light.png";

const UnderMaintenance = () => {
  return (
    <>
      {/* <!--Under Maintenance --> */}
      <div className="container-xxl container-p-y">
        <div className="misc-wrapper">
          <h2 className="mb-2 mx-2">Under Maintenance!</h2>
          <p className="mb-4 mx-2">
            Sorry for the inconvenience but we're performing some maintenance at
            the moment
          </p>
          <NavLink to="/" className="btn btn-primary">
            Back to home
          </NavLink>
          <div className="mt-4">
            <img
              src={imgError}
              alt="girl-doing-yoga-light"
              width="500"
              className="img-fluid"
              data-app-dark-img="illustrations/girl-doing-yoga-dark.png"
              data-app-light-img="illustrations/girl-doing-yoga-light.png"
            />
          </div>
        </div>
      </div>
      {/* <!-- /Under Maintenance --> */}
    </>
  );
};

export default UnderMaintenance;
