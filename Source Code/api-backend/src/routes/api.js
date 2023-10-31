import express from "express";
import homeController from "../controller/HomeController";
import productController from "../controller/ProductController";
import categoryController from "../controller/CategoryController";

const router = express.Router();

/**
 *
 * @param {*} app : express app
 */
const initApiRoutes = (app) => {
  router.get("/first-api", homeController.testAPI);
  router.get("/admin/home", homeController.dashboardAdmin);

  // category API
  router.get("/admin/get-categories", categoryController.getAllCategories);
  router.get("/admin/get-categories/:id", categoryController.getCategoryById);
  router.post("/admin/save-category", categoryController.saveCategory);
  router.post("/admin/update-category", categoryController.editCategory);

  // product API
  router.get("/admin/get-products", productController.getAllProducts);
  router.post("/admin/save-product", productController.saveProduct);

  return app.use("/api", router);
};

export default initApiRoutes;
