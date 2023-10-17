import { createBrowserRouter } from "react-router-dom";
import Home from "../component/homePage/Home";
import ProductList from "../component/productListPage/ProductList";
import Login from "../component/loginPage/Login";
import Layout from "../component/layout/Layout";
import ShoppingCart from "../component/cart/ShoppingCart";
import CheckOut from "../component/checkOutPage/CheckOut";
import ProductDetail from "../component/productDetailPage/ProductDetail";
import AccountInfo from "../component/accountPage/AccountInfo";
import InfoComponent from "../component/accountPage/InfoComponent";
import AddressComponent from "../component/accountPage/AddressComponent";
import OrderComponent from "../component/accountPage/OrderComponent";
import WishListComponent from "../component/accountPage/WishListComponent";

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
      {
        path: "account",
        element: <AccountInfo />,
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
    path: "/signin",
    element: <Login />,
  },
]);
