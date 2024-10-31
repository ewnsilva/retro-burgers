import express from "express";
import { categoryRouter } from "modules/Category/Routes/category.routes";

export const routes = (app: express.Application) => {
  app.use(express.json());
  app.use(categoryRouter);
};
