import express from "express";
import homeController from "../controller/HomeController";
import productController from "../controller/ProductController";
import categoryController from "../controller/CategoryController";
import authController from "../controller/AuthController";
import { checkUserJWT, checkPermission } from "../middleWare/JWTAction";

const router = express.Router();

/**
 *
 * @param {*} app : express app
 */
const initApiRoutes = (app) => {
  router.all("*", checkUserJWT, checkPermission);

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
  router.post("/admin/update-product", productController.editProduct);

  // auth API
  router.post("/admin/register-user", authController.createUser);
  router.post("/admin/login", authController.loginAPI);

  return app.use("/api", router);
};

export default initApiRoutes;
