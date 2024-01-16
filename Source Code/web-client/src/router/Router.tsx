import { createBrowserRouter } from "react-router-dom";
import Home from "../component/homePage/Home";
import ProductList from "../component/productListPage/ProductList";
import Signin from "../component/loginPage/Signin";
import Layout from "../component/layout/Layout";
import ShoppingCart from "../component/cart/ShoppingCart";
import CheckOut from "../component/checkOutPage/CheckOut";
import ProductDetail from "../component/productDetailPage/ProductDetail";
import InfoComponent from "../component/accountPage/InfoComponent";
import AddressComponent from "../component/accountPage/AddressComponent";
import OrderComponent from "../component/accountPage/OrderComponent";
import WishListComponent from "../component/accountPage/WishListComponent";
import PrivateRoute from "./PrivateRoute";

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
        path: "products/:categoryParam",
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
        path: "product-detail/:id",
        element: <ProductDetail />,
      },
      {
        path: "account",
        element: <PrivateRoute />,
        children: [
          {
            index: true,
            element: <InfoComponent />,
          },
          {
            path: "address",
            element: <AddressComponent />,
          },
          {
            path: "order",
            element: <OrderComponent />,
          },
          {
            path: "wishlist",
            element: <WishListComponent />,
          },
        ],
      },
    ],
  },
  {
    path: "/sign-in",
    element: <Signin />,
  },
]);
