import React from "react";
import { Dropdown } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import avatar from "../../assets/images/neon-pink.png";

type CustomToggleProps = {
  children?: React.ReactNode;
  onClick: (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {};
};
const CustomToggle = React.forwardRef(
  (props: CustomToggleProps, ref: React.Ref<HTMLAnchorElement>) => (
    <a
      href="/#"
      ref={ref}
      onClick={(e) => {
        e.preventDefault();
        props.onClick(e);
      }}
    >
      {props.children}
    </a>
  )
);

const Header = () => {
  return (
    <>
      <div className="layout-menu-toggle navbar-nav align-items-xl-center me-3 me-xl-0 d-xl-none">
        <NavLink className="nav-item nav-link px-0 me-xl-4" to="/">
          <i className="fa-solid fa-bars"></i>
        </NavLink>
      </div>
      <div
        className="navbar-nav-right d-flex align-items-center justify-content-between"
        id="navbar-collapse"
      >
        {/* <!-- Search --> */}
        <div className="navbar-nav align-items-center justify-content-between">
          <div className="nav-item d-flex align-items-center">
            <i className="fa-solid fa-magnifying-glass"></i>
            <input
              type="text"
              className="form-control border-0 shadow-none"
              placeholder="Search..."
              aria-label="Search..."
            />
          </div>
        </div>
        {/* <!-- /Search --> */}

        <div className="d-flex align-items-center">
          <Dropdown className="me-3">
            <Dropdown.Toggle as={CustomToggle} id="dropdown-custom-components">
              <i className="fa-regular fa-bell fs-3"></i>
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <Dropdown className="">
            <Dropdown.Toggle as={CustomToggle} id="dropdown-custom-components">
              <img
                src={avatar}
                height={30}
                width={30}
                alt="avatar"
                className="rounded-circle"
              />
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </div>
    </>
  );
};

export default Header;
