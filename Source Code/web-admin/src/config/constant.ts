export const BASE_URL = "http://localhost:8080/api/";

export const API = {
  category: {
    getCategory: "admin/get-categories",
    createCategory: "admin/save-category",
    updateCategory: "admin/update-category",
  },
  product: {
    createProduct: "admin/save-product",
    getProducts: "admin/get-products",
    updateProduct: "admin/update-product",
  },
  auth: {
    registerUser: "admin/register-user",
    signinUser: "admin/login",
    getInfoAccount: "admin/get-info-account",
    signoutUser: "admin/logout",
  },
};
