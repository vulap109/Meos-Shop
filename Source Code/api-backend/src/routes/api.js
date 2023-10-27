import express from "express";
import homeController from "../controller/HomeController";

const router = express.Router();

/**
 *
 * @param {*} app : express app
 */
const initApiRoutes = (app) => {
  router.get("/first-api", homeController.testAPI);
  router.get("/admin/home", homeController.dashboardAdmin);

  return app.use("/api", router);
};

export default initApiRoutes;
