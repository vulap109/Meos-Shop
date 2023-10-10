import { createBrowserRouter } from "react-router-dom";
import Home from "../component/homePage/Home";
import ProductList from "../component/productListPage/ProductList";
import Login from "../component/loginPage/Login";
import Layout from "../component/layout/Layout";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      // {
      //   element: <PrivateRoute />,
      //   children: [
      //     {
      //       path: "users",
      //       element: <App />,
      //     },
      //   ]
      // },
      {
        index: true,
        element: <Home />,
      },
      {
        path: "products",
        element: <ProductList />,
      },
    ],
  },
  {
    path: "/signin",
    element: <Login />,
  },
]);
