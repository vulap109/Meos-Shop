import React from "react";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer className="content-footer footer bg-footer-theme">
        <div className="container-xxl d-flex flex-wrap justify-content-between py-2 flex-md-row flex-column">
          <div className="mb-2 mb-md-0">
            ©2023, made with ❤️ by
            <NavLink to="/" target="_blank" className="footer-link fw-bolder">
              LapVQ
            </NavLink>
          </div>
          <div>
            <NavLink to="/" className="footer-link me-4" target="_blank">
              License
            </NavLink>
            <NavLink to="/" target="_blank" className="footer-link me-4">
              More Themes
            </NavLink>

            <NavLink to="/" target="_blank" className="footer-link me-4">
              Documentation
            </NavLink>

            <NavLink to="/" target="_blank" className="footer-link me-4">
              Support
            </NavLink>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
