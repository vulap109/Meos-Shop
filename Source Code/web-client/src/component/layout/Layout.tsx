import React, { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import StickyBanner from "../banner/StickyBanner";
import "../../styles/Banner.scss";
import { useDispatch, useSelector } from "react-redux";
import Loading from "../customComponent/Loading";
import { getInfoSignin } from "../../service/authService";
import { Dispatch } from "redux";
import CustomModal from "../customComponent/CustomModal";

function Layout() {
  const location = useLocation();
  const { isLoading } = useSelector((state: state) => state.authState);
  const { modalOpen, message, confirmation, handleClose, handleSuccess } =
    useSelector((state: state) => state.modalState);
  const dispatch: Dispatch<any> = useDispatch();

  // get info account if user is loged in, and set in redux
  const getAccount = async () => {
    let { data } = await getInfoSignin();
    console.log("check get info account ", data);
    if (data && data.result && data.access_token) {
      dispatch({
        type: "SIGN_IN_SUCCESS",
        payload: {
          email: data.email,
          token: data.access_token,
          userName: data.userName,
        },
      });
    } else {
      dispatch({ type: "SIGN_IN_ERROR" });
    }
  };

  useEffect(() => {
    getAccount();
  }, []);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  if (isLoading) {
    return (
      <div className="d-flex min-vh-100">
        <Loading />
      </div>
    );
  }

  return (
    <>
      <div className="bg-light">
        {/* page header */}
        <Header />

        {/* banner */}
        <StickyBanner />

        {/* page content */}
        <Outlet />

        {/* page footer */}
        <Footer />
      </div>

      {/* display message notice */}
      <CustomModal
        isOpen={modalOpen}
        handleClose={handleClose}
        confirmation={confirmation}
        message={message}
        handleSuccess={handleSuccess}
      />
    </>
  );
}

export default Layout;
