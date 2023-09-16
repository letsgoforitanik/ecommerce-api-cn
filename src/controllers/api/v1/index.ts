import express from "express";
import * as productController from "./product";

const v1Router = express.Router();

v1Router.use(productController.router);

export { v1Router };