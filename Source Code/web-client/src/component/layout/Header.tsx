import React, { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import { Collapse, NavDropdown } from "react-bootstrap";
import logo from "../../assets/icons/cat.png";
import "../../styles/Menu.scss";

const Header = () => {
  const [open, setOpen] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    // close navbar collapse
    const closeCollapse = (e: MouseEvent) => {
      if (!buttonRef.current?.contains(e.target as Node)) {
        setOpen(false);
      }
    };

    document.body.addEventListener("click", closeCollapse);

    return () => {
      document.removeEventListener("click", closeCollapse);
    };
    // close navbar collapse
  }, []);

  return (
    <>
      {/* Main Navigation */}
      <header className="header-position">
        {/* Jumbotron */}
        <div className="p-3 text-center bg-white border-bottom position-fixed z-3 w-100">
          <div className="container">
            <div className="row gy-3 align-items-center">
              {/* Left elements */}
              <div className="col-lg-3 col-sm-6 d-flex flex-row">
                {/* logo */}
                <NavLink to="/" className={"nav-link"}>
                  <img src={logo} height={35} alt="logo" className="pe-2" />
                  Meoww
                </NavLink>
                <button
                  ref={buttonRef}
                  className="btn btn-outline-primary ms-3"
                  onClick={() => setOpen(!open)}
                >
                  <div className="row align-items-center">
                    <i className="fas fa-bars w-auto pe-0"></i>{" "}
                    <span className="w-auto ">Danh mục</span>
                  </div>
                </button>
                {/* button menu */}
              </div>
              {/* Left elements */}

              {/* Center elements  */}
              <div className="col-lg-4 col-md-12 col-12">
                <div className="input-group float-center">
                  <div className="input-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Search"
                    />
                    <button
                      className="btn btn-primary shadow-0"
                      type="button"
                      id="button-addon2"
                    >
                      <i className="fas fa-search"></i>
                    </button>
                  </div>
                </div>
              </div>
              {/* Center elements */}

              {/* Right elements */}
              <div className="order-lg-last col-lg-5 col-sm-8 col-8">
                <div className="d-flex float-lg-end">
                  <NavLink
                    to="/account"
                    className={
                      "nav-link me-1 border rounded py-1 px-3 nav-link d-flex align-items-center"
                    }
                  >
                    <i className="fas fa-user-alt m-1 me-md-2"></i>
                    <p className="d-none d-md-block mb-0">Sign in</p>
                  </NavLink>
                  <NavLink
                    to="/signin"
                    className={
                      "nav-link me-1 border rounded py-1 px-3 nav-link d-flex align-items-center"
                    }
                  >
                    <i className="fas fa-heart m-1 me-md-2"></i>
                    <p className="d-none d-md-block mb-0">Wishlist</p>
                  </NavLink>
                  <NavLink
                    to="/shopping-cart"
                    className={
                      "border rounded py-1 px-3 nav-link d-flex align-items-center"
                    }
                  >
                    <i className="fas fa-shopping-cart m-1 me-md-2"></i>
                    <p className="d-none d-md-block mb-0">My cart</p>
                  </NavLink>
                </div>
              </div>
              {/* Right elements */}
            </div>
          </div>
        </div>
        {/* Jumbotron */}

        {/* Navbar */}
        <Collapse
          in={open}
          className="position-fixed z-3 w-100 h-100 collapse-position"
        >
          <div
            id="example-collapse-text"
            style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
          >
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
              {/* Container wrapper */}
              <div className="container justify-content-center justify-content-md-between">
                {/* Toggle button */}

                {/* Collapsible wrapper */}

                {/* Left links */}
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                    <NavLink to="/products" className={"nav-link"}>
                      Products
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink to="/shopping-cart" className={"nav-link"}>
                      My Cart
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink to="/product-detail" className={"nav-link"}>
                      Product details
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink to="/projects" className={"nav-link"}>
                      Projects
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink to="/menuitem" className={"nav-link"}>
                      Menu item
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink to="/menuname" className={"nav-link"}>
                      Menu name
                    </NavLink>
                  </li>
                  {/* Navbar dropdown */}
                  <li className="nav-item dropdown">
                    <NavDropdown title="Other" id="basic-nav-dropdown">
                      <NavDropdown.Item>Logout</NavDropdown.Item>
                      <NavDropdown.Item>Logout2</NavDropdown.Item>
                      <NavDropdown.Item>Logout3</NavDropdown.Item>
                    </NavDropdown>
                  </li>
                </ul>
                {/* Left links */}
              </div>
              {/* Container wrapper */}
            </nav>
          </div>
        </Collapse>

        {/* Navbar */}
      </header>
    </>
  );
};

export default Header;
