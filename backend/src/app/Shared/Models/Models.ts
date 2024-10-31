import { Sequelize } from "sequelize";
import { CategoryModel } from "modules/Category/Models/category";

const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: "src/database/database.sqlite",
});

const models = {
  Category: CategoryModel(sequelize),
};

export { sequelize, models };
export default sequelize;
