import React from "react";
import { useSelector } from "react-redux";
import AccountInfo from "../component/accountPage/AccountInfo";
import { Navigate } from "react-router-dom";

const PrivateRoute = () => {
  const { auth } = useSelector((state: state) => state.authState.user);

  return auth ? <AccountInfo /> : <Navigate to="/sign-in" />;
};

export default PrivateRoute;
