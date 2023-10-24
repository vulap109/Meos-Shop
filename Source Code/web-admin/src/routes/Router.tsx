import { createBrowserRouter } from "react-router-dom";
import Layout from "../component/layout/Layout";
import Home from "../component/Home";
import Products from "../component/Products";
import Categories from "../component/Categories";
import Users from "../component/Users";
import Setting from "../component/Setting";
import Order from "../component/Order";

export const router = createBrowserRouter([
  {
    path: "/admin",
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
        element: <Products />,
      },
      {
        path: "categories",
        element: <Categories />,
      },
      {
        path: "order",
        element: <Order />,
      },
      {
        path: "users",
        element: <Users />,
      },
      {
        path: "setting",
        element: <Setting />,
      },
    ],
  },
  {
    path: "/signin",
    element: <Home />,
  },
]);
