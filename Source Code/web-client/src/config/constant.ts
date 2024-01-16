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
    getRecommended: "/client/products/get-product-recomended",
    getByCategory: "/client/products/get-product-category/"
  }
};

export const categoryT = [
  { id: 1, title: "Laptop", url: "laptop" },
  { id: 2, title: "Laptop gaming", url: "laptop-gaming" },
  { id: 3, title: "PC", url: "pc" },
  { id: 4, title: "Màn hình", url: "monitor" },
  { id: 5, title: "Bàn phím", url: "key-board" },
  { id: 6, title: "Chuột", url: "mouse" },
  { id: 7, title: "Phụ kiện", url: "accessory" },
]
