import express from "express";
import cors from "cors";
import sequelize from "./database";
import { routes } from "shared/Routes/Routes";

const app = express();

app.use(cors());
app.use(express.json());

sequelize
  .authenticate()
  .then(() => console.log("Database connected"))
  .catch((err) => console.error("Database error:", err));

routes(app);

export default app;
