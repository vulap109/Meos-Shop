export const BASE_URL = "http://localhost:8080/api/";

export const API = {
  auth: {
    registerUser: "admin/register-user",
    signinUser: "admin/login",
    getInfoSignin: "client/get-info-sign-in",
    signoutUser: "admin/logout",
  },
  user: {
    getInfoAccount: "client/get-info-account",
    updateInfoAccount: "client/update-info-account",
    createAddress: "client/create-address",
    getAllAddress: "client/get-addresses",
    updateAddress: "client/update-address",
  },
};
