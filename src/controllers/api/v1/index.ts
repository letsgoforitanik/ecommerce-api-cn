import express from "express";
import * as productController from "./product";

// version 1 of the api

const v1Router = express.Router();

v1Router.use('/', (req, res) => res.redirect('https://documenter.getpostman.com/view/2857534/2s9YC7SBgB'));

v1Router.use(productController.router);

export { v1Router };