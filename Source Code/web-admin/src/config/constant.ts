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
    uploadImages: "admin/upload-images",
  },
  auth: {
    registerUser: "admin/register-user",
    signinUser: "admin/login",
    getInfoAccount: "admin/get-info-account",
    signoutUser: "admin/logout",
  },
  user: {
    createGroup: "admin/create-group",
    getUsers: "admin/get-users",
    getGroups: "admin/get-groups",
    getRoles: "admin/get-roles",
    updateUser: "admin/update-user",
    getGroupRole: "admin/get-group-role/",
    saveGroupRole: "admin/save-group-role",
  },
};
