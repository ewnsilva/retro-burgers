import { Router } from "express";
import CategoryController from "../Controllers/Category.controller";

const categoryController = new CategoryController();

export const categoryRouter = Router();

categoryRouter.get("/categories", (req, res) => {
  res.set("Cache-Control", "no-store");
  return categoryController.findAll(req, res);
});
