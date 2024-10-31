import { Model, DataTypes, Sequelize } from "sequelize";
import { CategoryAttributes } from "../Interfaces/Category.interfaces";

export class Category extends Model<CategoryAttributes> {}

export const CategoryModel = (sequelize: Sequelize) => {
  Category.init(
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      title: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "Category",
      tableName: "categories",
    }
  );
  return Category;
};
