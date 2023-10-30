import express from "express";
import homeController from "../controller/HomeController";
import productController from "../controller/ProductController";

const router = express.Router();

/**
 *
 * @param {*} app : express app
 */
const initApiRoutes = (app) => {
  router.get("/first-api", homeController.testAPI);
  router.get("/admin/home", homeController.dashboardAdmin);
  router.get("/admin/get-all-categories", productController.getAllCategories);
  router.post("/admin/save-category", productController.saveCategory);

  return app.use("/api", router);
};

export default initApiRoutes;
