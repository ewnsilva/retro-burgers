import express from "express";
import { routes } from "shared/Routes/Routes";

const app = express();

routes(app);

export default app;
