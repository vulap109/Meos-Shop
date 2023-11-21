import express from "express";
import homeController from "../controller/HomeController";
import productController from "../controller/ProductController";
import categoryController from "../controller/CategoryController";
import authController from "../controller/AuthController";
import userController from "../controller/UserController";
import accountController from "../controller/AccountController";
import {
  checkUserJWT,
  checkPermission,
  checkUserClientJWT,
} from "../middleWare/JWTAction";
import { upload } from "../middleWare/multerMW";

const router = express.Router();

/**
 *
 * @param {*} app : express app
 */
const initApiRoutes = (app) => {
  router.all("/admin/*", checkUserJWT, checkPermission);

  router.get("/first-api", homeController.testAPI);
  router.get("/admin/home", homeController.dashboardAdmin);

  // category API
  router.get("/admin/get-categories", categoryController.getAllCategories);
  router.get("/admin/get-categories/:id", categoryController.getCategoryById);
  router.post("/admin/save-category", categoryController.saveCategory);
  router.post("/admin/update-category", categoryController.editCategory);

  // product API
  router.get("/admin/get-products", productController.getAllProducts);
  router.get("/admin/get-products/:id", productController.getProductById);
  router.post("/admin/save-product", productController.saveProduct);
  router.post(
    "/admin/upload-images",
    upload.array("images"),
    productController.uploadImg
  );
  router.post("/admin/update-product", productController.editProduct);

  // auth API
  router.post("/admin/register-user", authController.createUser);
  router.post("/admin/login", authController.loginAPI);
  router.get("/admin/get-info-account", authController.getAccount);
  router.get("/admin/logout", authController.logoutAPI);

  // user-group-role API
  router.get("/admin/get-users", userController.getAllUsers);
  router.post("/admin/create-group", userController.createGroup);
  router.get("/admin/get-groups", userController.getAllGroups);
  router.get("/admin/get-roles", userController.getAllRoles);
  router.post("/admin/update-user", userController.updateUser);
  router.get("/admin/get-group-role/:groupid", userController.getGroupRole);
  router.post("/admin/save-group-role", userController.saveGroupRole);

  /// API for client
  router.all("/client/*", checkUserClientJWT);

  // auth API
  router.get("/client/get-info-sign-in", authController.getAccount);

  // user API
  router.post("/client/get-info-account", accountController.getInfoAccount);
  router.post(
    "/client/update-info-account",
    accountController.updateInfoAccount
  );

  return app.use("/api", router);
};

export default initApiRoutes;
