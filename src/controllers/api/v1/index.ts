import express from "express";
import * as productController from "./product";

// version 1 of the api

const v1Router = express.Router();

v1Router.use(productController.router);

export { v1Router };