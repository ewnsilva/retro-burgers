import express from "express";
import { categoryRouter } from "modules/Category/Routes/category.routes";
import { productRouter } from "modules/Product/Routes/product.routes";
import { additionalRouter } from "modules/Additionals/Routes/additional.routes";

export const routes = (app: express.Application) => {
  app.use(express.json());
  app.use(categoryRouter);
  app.use(productRouter);
  app.use(additionalRouter);
};
