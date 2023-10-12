import { createBrowserRouter } from "react-router-dom";
import Home from "../component/homePage/Home";
import ProductList from "../component/productListPage/ProductList";
import Login from "../component/loginPage/Login";
import Layout from "../component/layout/Layout";
import ShoppingCart from "../component/cart/ShoppingCart";
import CheckOut from "../component/checkOutPage/CheckOut";
import ProductDetail from "../component/productDetailPage/ProductDetail";

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
      {
        path: "shopping-cart",
        element: <ShoppingCart />,
      },
      {
        path: "check-out",
        element: <CheckOut />,
      },
      {
        path: "product-detail",
        element: <ProductDetail />,
      },
    ],
  },
  {
    path: "/signin",
    element: <Login />,
  },
]);
