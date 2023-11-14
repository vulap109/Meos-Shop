import React, { useState } from "react";
import { Dropdown } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Dispatch } from "redux";
import avatar from "../../assets/images/favicon.png";
import { signOutAction } from "../../redux/auth/authAction";
import {
  closeModalAction,
  openModalAction,
} from "../../redux/modal/modalAction";

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
  const { user } = useSelector((state: state) => state.authState);
  const dispatch: Dispatch<any> = useDispatch();

  // handle confirm user to sign out
  const handleConfirmSignout = () => {
    // open the modal
    dispatch(openModalAction("Are you sure to sign out?", closeMsg));
  };
  const closeMsg = () => {
    // close the modal
    dispatch(closeModalAction());
    // sign out user
    dispatch(signOutAction());
  };

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
          <div>
            <span className="text-dark me-3">Wellcome {user.userName} !</span>
          </div>

          {/* avatar user */}
          <Dropdown className="me-3">
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
              <Dropdown.Item>Change password</Dropdown.Item>
              <Dropdown.Item onClick={handleConfirmSignout}>
                Sign out
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

          {/* notification */}
          <Dropdown>
            <Dropdown.Toggle as={CustomToggle} id="dropdown-custom-components">
              <i className="fa-regular fa-bell fs-3"></i>
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
