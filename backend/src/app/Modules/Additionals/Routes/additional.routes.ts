import { Router } from "express";
import { AdditionalController } from "../Controllers/Additional.controller";

const additionalController = new AdditionalController();

export const additionalRouter = Router();

additionalRouter.get("/additionals", async (req, res) => {
  res.set("Cache-Control", "no-store");
  await additionalController.findAll(req, res);
  console.log("Resposta enviada");
});

export default additionalRouter;
