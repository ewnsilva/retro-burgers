import { Router } from "express";
import { ProductController } from "../Controllers/Product.controller";

const productController = new ProductController();

export const productRouter = Router();

productRouter.get("/products", (req, res) => {
  res.set("Cache-Control", "no-store");
  productController.findAll(req, res);
});

productRouter.get("/products/:category_id", (req, res) => {
  res.set("Cache-Control", "no-store");
  productController.findAllInCategory(req, res);
});
