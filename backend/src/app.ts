import path from "path";
import express from "express";
import cors from "cors";
import sequelize from "./database";
import { routes } from "shared/Routes/Routes";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/images", express.static(path.resolve(__dirname, "../public/images")));
app.use("/audio", express.static(path.resolve(__dirname, "../public/audio")));

sequelize
  .authenticate()
  .then(() => console.log("Database connected"))
  .catch((err) => console.error("Database error:", err));

routes(app);

export default app;
