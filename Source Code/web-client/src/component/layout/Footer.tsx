import React from "react";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <>
      {/* Footer */}
      <footer className="text-center text-lg-start text-muted bg-primary mt-3">
        {/* Section: Links  */}
        <section className="">
          <div className="container text-center text-md-start pt-4 pb-4">
            {/* Grid row */}
            <div className="row mt-3">
              {/* Grid column */}
              <div className="col-12 col-lg-3 col-sm-12 mb-2">
                {/* Content */}
                <NavLink
                  to="https://mdbootstrap.com/"
                  className="text-white nav-link"
                >
                  <h2>Meo's shop</h2>
                </NavLink>
                <p className="mt-1 text-white">© 2023 Copyright: Meo'shop</p>
              </div>
              {/* Grid column */}

              {/* Grid column */}
              <div className="col-6 col-sm-4 col-lg-2">
                {/* Links */}
                <h6 className="text-uppercase text-white fw-bold mb-2">
                  Store
                </h6>
                <ul className="list-unstyled mb-4">
                  <li>
                    <NavLink className="text-white-50 nav-link" to="#">
                      About us
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className="text-white-50 nav-link" to="#">
                      Find store
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className="text-white-50 nav-link" to="#">
                      Categories
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className="text-white-50 nav-link" to="#">
                      Blogs
                    </NavLink>
                  </li>
                </ul>
              </div>
              {/* Grid column */}

              {/* Grid column */}
              <div className="col-6 col-sm-4 col-lg-2">
                {/* Links */}
                <h6 className="text-uppercase text-white fw-bold mb-2">
                  Information
                </h6>
                <ul className="list-unstyled mb-4">
                  <li>
                    <NavLink className="text-white-50 nav-link" to="#">
                      Help center
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className="text-white-50 nav-link" to="#">
                      Money refund
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className="text-white-50 nav-link" to="#">
                      Shipping info
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className="text-white-50 nav-link" to="#">
                      Refunds
                    </NavLink>
                  </li>
                </ul>
              </div>
              {/* Grid column */}

              {/* Grid column */}
              <div className="col-6 col-sm-4 col-lg-2">
                {/* Links */}
                <h6 className="text-uppercase text-white fw-bold mb-2">
                  Support
                </h6>
                <ul className="list-unstyled mb-4">
                  <li>
                    <NavLink className="text-white-50 nav-link" to="#">
                      Help center
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className="text-white-50 nav-link" to="#">
                      Documents
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className="text-white-50 nav-link" to="#">
                      Account restore
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className="text-white-50 nav-link" to="#">
                      My orders
                    </NavLink>
                  </li>
                </ul>
              </div>
              {/* Grid column */}

              {/* Grid column */}
              <div className="col-12 col-sm-12 col-lg-3">
                {/* Links */}
                <h6 className="text-uppercase text-white fw-bold mb-2">
                  Newsletter
                </h6>
                <p className="text-white">
                  Stay in touch with latest updates about our products and
                  offers
                </p>
                <div className="input-group mb-3">
                  <input
                    type="email"
                    className="form-control border"
                    placeholder="Email"
                    aria-label="Email"
                    aria-describedby="button-addon2"
                  />
                  <button
                    className="btn btn-light border shadow-0"
                    type="button"
                    id="button-addon2"
                    data-mdb-ripple-color="dark"
                  >
                    Join
                  </button>
                </div>
              </div>
              {/* Grid column */}
            </div>
            {/* Grid row */}
          </div>
        </section>
        {/* Section: Links */}

        <div className="">
          <div className="container">
            <div className="d-flex justify-content-between py-4 border-top">
              {/* payment */}
              <div>
                <i className="fab fa-lg fa-cc-visa text-white px-2"></i>
                <i className="fab fa-lg fa-cc-amex text-white px-2"></i>
                <i className="fab fa-lg fa-cc-mastercard text-white px-2"></i>
                <i className="fab fa-lg fa-cc-paypal text-white px-2"></i>
              </div>
              {/* payment */}

              {/* language selector -*/}
              <div className="dropdown dropup">
                <NavLink
                  className="dropdown-toggle text-white nav-link"
                  to="#"
                  id="Dropdown"
                  role="button"
                  data-mdb-toggle="dropdown"
                  aria-expanded="false"
                >
                  <i className="flag-united-kingdom flag m-0 me-1"></i>English
                </NavLink>

                <ul
                  className="dropdown-menu dropdown-menu-end"
                  aria-labelledby="Dropdown"
                >
                  <li>
                    <NavLink className="dropdown-item nav-link" to="#">
                      <i className="flag-united-kingdom flag"></i>English
                      <i className="fa fa-check text-success ms-2"></i>
                    </NavLink>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <NavLink className="dropdown-item nav-link" to="#">
                      <i className="flag-poland flag"></i>Polski
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className="dropdown-item nav-link" to="#">
                      <i className="flag-china flag"></i>中文
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className="dropdown-item nav-link" to="#">
                      <i className="flag-japan flag"></i>日本語
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className="dropdown-item nav-link" to="#">
                      <i className="flag-germany flag"></i>Deutsch
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className="dropdown-item nav-link" to="#">
                      <i className="flag-france flag"></i>Français
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className="dropdown-item nav-link" to="#">
                      <i className="flag-spain flag"></i>Español
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className="dropdown-item nav-link" to="#">
                      <i className="flag-russia flag"></i>Русский
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className="dropdown-item nav-link" to="#">
                      <i className="flag-portugal flag"></i>Português
                    </NavLink>
                  </li>
                </ul>
              </div>
              {/* language selector */}
            </div>
          </div>
        </div>
      </footer>
      {/* Footer */}
    </>
  );
};

export default Footer;
