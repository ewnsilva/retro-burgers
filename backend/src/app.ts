import express from "express";
import cors from "cors";
import sequelize from "./database";
import { routes } from "shared/Routes/Routes";

const app = express();

app.use(
  cors({
    origin: process.env.FRONTEND_URL || "http://localhost:3000",
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

app.use((req, res, next) => {
  res.set("Cache-Control", "no-store");
  next();
});

app.use(express.json());

sequelize
  .authenticate()
  .then(() => console.log("Database connected"))
  .catch((err) => console.error("Database error:", err));

routes(app);

export default app;
