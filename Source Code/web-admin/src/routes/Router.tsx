import { createBrowserRouter } from "react-router-dom";
import Home from "../component/Home";
import Categories from "../component/categoryScreen/Categories";
import Setting from "../component/settingScreen.tsx/Setting";
import Order from "../component/orderScreen/Order";
import ListProducts from "../component/productScreen/ListProducts";
import Products from "../component/productScreen/Products";
import AddNewProduct from "../component/productScreen/AddNewProduct";
import ListCategories from "../component/categoryScreen/ListCategories";
import EditCategory from "../component/categoryScreen/EditCategory";
import Admins from "../component/adminScreen/Admins";
import SignIn from "../component/authScreen/SignIn";
import SignUp from "../component/authScreen/SignUp";
import ForgotPassword from "../component/authScreen/ForgotPassword";
import NotFound from "../component/errorScreen/NotFound";
import Unauthorized from "../component/errorScreen/Unauthorized";
import UnderMaintenance from "../component/errorScreen/UnderMaintenance";
import PrivateRoute from "./PrivateRoute";
import GroupRole from "../component/adminScreen/GroupRole";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <PrivateRoute />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "products",
        element: <Products />,
        children: [
          {
            index: true,
            element: <ListProducts />,
          },
          {
            path: "add-new-product",
            element: <AddNewProduct />,
          },
          {
            path: "edit-product/:id",
            element: <AddNewProduct />,
          },
        ],
      },
      {
        path: "categories",
        element: <Categories />,
        children: [
          {
            index: true,
            element: <ListCategories />,
          },
          {
            path: "edit-category/:id",
            element: <EditCategory />,
          },
        ],
      },
      {
        path: "order",
        element: <Order />,
      },
      {
        path: "admin-list-group",
        element: <Admins />,
      },
      {
        path: "admin-group-role",
        element: <GroupRole />,
      },
      {
        path: "setting",
        element: <Setting />,
      },
    ],
  },
  {
    path: "sign-in",
    element: <SignIn />,
  },
  {
    path: "sign-up",
    element: <SignUp />,
  },
  {
    path: "forgot-password",
    element: <ForgotPassword />,
  },
  {
    path: "404",
    element: <NotFound />,
  },
  {
    path: "401",
    element: <Unauthorized />,
  },
  {
    path: "500",
    element: <UnderMaintenance />,
  },
]);
