import React from "react";
import { NavLink } from "react-router-dom";
import { NavDropdown } from "react-bootstrap";
import logo from "../../assets/icons/cat.png";

const Header = () => {
  return (
    <>
      {/* Main Navigation */}
      <header>
        {/* Jumbotron */}
        <div className="p-3 text-center bg-white border-bottom">
          <div className="container">
            <div className="row gy-3 align-items-center">
              {/* Left elements */}
              <div className="col-lg-2 col-sm-4 col-4">
                <NavLink to="/" className={"nav-link"}>
                  <img src={logo} height={35} alt="logo" className="pe-2" />
                  Meoww
                </NavLink>
              </div>
              {/* Left elements */}

              {/* Center elements  */}
              <div className="order-lg-last col-lg-5 col-sm-8 col-8">
                <div className="d-flex float-end">
                  <NavLink
                    to="/signin"
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
              {/* Center elements */}

              {/* Right elements */}
              <div className="col-lg-5 col-md-12 col-12">
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
              {/* Right elements */}
            </div>
          </div>
        </div>
        {/* Jumbotron */}

        {/* Navbar */}
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
          {/* Container wrapper */}
          <div className="container justify-content-center justify-content-md-between">
            {/* Toggle button */}
            <button
              className="navbar-toggler"
              type="button"
              data-mdb-toggle="collapse"
              data-mdb-target="#navbarLeftAlignExample"
              aria-controls="navbarLeftAlignExample"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <i className="fas fa-bars"></i>
            </button>

            {/* Collapsible wrapper */}
            <div
              className="collapse navbar-collapse"
              id="navbarLeftAlignExample"
            >
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
                  {/* <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-mdb-toggle="dropdown" aria-expanded="false">
                    Others
                  </a>
                  Dropdown menu
                  <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                    <li>
                      <a className="dropdown-item" href="#">Action</a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">Another action</a>
                    </li>
                    <li><hr className="dropdown-divider" /></li>
                    <li>
                      <a className="dropdown-item" href="#">Something else here</a>
                    </li>
                  </ul> */}
                  <NavDropdown title="Other" id="basic-nav-dropdown">
                    <NavDropdown.Item>Logout</NavDropdown.Item>
                    <NavDropdown.Item>Logout2</NavDropdown.Item>
                    <NavDropdown.Item>Logout3</NavDropdown.Item>
                  </NavDropdown>
                </li>
              </ul>
              {/* Left links */}
            </div>
          </div>
          {/* Container wrapper */}
        </nav>
        {/* Navbar */}
      </header>
    </>
  );
};

export default Header;
