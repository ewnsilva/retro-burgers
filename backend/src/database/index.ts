import { Sequelize } from "sequelize";
import config from "../config/config.json";

const env = process.env.NODE_ENV || "development";
const dbConfig = (config as any)[env];

const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: dbConfig.storage,
  logging: false,
});

export default sequelize;
