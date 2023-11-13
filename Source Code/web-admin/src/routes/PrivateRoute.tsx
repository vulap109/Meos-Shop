import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import Layout from "../component/layout/Layout";
import { getInfoAccount } from "../service/authService";
import { useEffect } from "react";
import { Dispatch } from "redux";
import Loading from "../component/custom/Loading";

const PrivateRoute = () => {
  const dispatch: Dispatch<any> = useDispatch();
  const { user, isLoading } = useSelector((state: state) => state.authState);

  // get info account if user is loged in, and set in redux
  const getAccount = async () => {
    let { data } = await getInfoAccount();
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
      dispatch({ type: "SIGN_IN_ERROR", payload: { message: data.message } });
    }
  };
  useEffect(() => {
    getAccount();
  }, []);

  if (isLoading) {
    return (
      <div className="d-flex min-vh-100">
        <Loading />
      </div>
    );
  }

  return user && user.auth ? <Layout /> : <Navigate to="/sign-in" />;
};

export default PrivateRoute;
