import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import Layout from "../component/layout/Layout";

const PrivateRoute = () => {
  const auth = useSelector((state: state) => state.authState.user.auth);

  return auth ? <Layout /> : <Navigate to="/sign-in" />;
};

export default PrivateRoute;
