import { createBrowserRouter } from "react-router-dom";
import Layout from "../component/layout/Layout";
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

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
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
        path: "admin-account",
        element: <Admins />,
      },
      {
        path: "setting",
        element: <Setting />,
      },
    ],
  },
  {
    path: "signin",
    element: <Home />,
  },
]);
