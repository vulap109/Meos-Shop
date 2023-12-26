export const BASE_URL = "http://localhost:8080/api/";

export const API = {
  auth: {
    registerUser: "admin/register-user",
    signinUser: "admin/login",
    getInfoSignin: "client/accounts/get-info-sign-in",
    signoutUser: "admin/logout",
  },
  user: {
    getInfoAccount: "client/accounts/get-info-account",
    updateInfoAccount: "client/accounts/update-info-account",
    createAddress: "client/accounts/create-address",
    getAllAddress: "client/accounts/get-addresses",
    updateAddress: "client/accounts/update-address",
  },
  product: {
    getNew: "client/products/get-products-new",
    getByid: "client/products/get-product-id/",
    getRecommended: "/client/products/get-product-recomended"
  }
};
