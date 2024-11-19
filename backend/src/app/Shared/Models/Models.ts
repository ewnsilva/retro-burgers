import { Sequelize } from "sequelize";
import { CategoryModel } from "modules/Category/Models/category";
import { ProductModel } from "modules/Product/Models/product";

const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: "src/database/database.sqlite",
});

const models = {
  Category: CategoryModel(sequelize),
  Product: ProductModel(sequelize),
};

export { sequelize, models };
export default sequelize;
