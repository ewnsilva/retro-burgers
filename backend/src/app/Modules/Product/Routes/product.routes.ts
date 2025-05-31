import { Router } from "express";
import { ProductController } from "../Controllers/Product.controller";

const productController = new ProductController();

export const productRouter = Router();

productRouter.get("/products", (req, res) =>
  productController.findAll(req, res)
);

productRouter.get("/products/:category_id", (req, res) =>
  productController.findAllInCategory(req, res)
);

productRouter.get("/products/:id", (req, res) =>
  productController.findById(req, res)
);

