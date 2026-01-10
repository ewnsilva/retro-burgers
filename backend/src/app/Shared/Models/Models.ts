import { Sequelize } from "sequelize";
import { CategoryModel } from "modules/Category/Models/category";
import { ProductModel } from "modules/Product/Models/product";
import { AdditionalModel } from "modules/Additionals/Models/additional";

const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: "src/database/database.sqlite",
});

const models = {
  Category: CategoryModel(sequelize),
  Product: ProductModel(sequelize),
  Additional: AdditionalModel(sequelize),
};

Object.values(models).forEach((model: any) => {
  if (model.associate) {
    model.associate(models);
  }
});

export { sequelize, models };
export default sequelize;
