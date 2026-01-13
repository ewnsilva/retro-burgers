import { Model, DataTypes, Sequelize, Op } from "sequelize";
import { ProductAttributes } from "../Interfaces/Product.interfaces";
import { Category } from "modules/Category/Models/category";
import { Additional } from "modules/Additionals/Models/additional";

export class Product extends Model<ProductAttributes> {
  static associate() {
    Product.belongsTo(Category, {
      foreignKey: "category_id",
    });

    Product.belongsToMany(Additional, {
      through: "product_additionals",
      foreignKey: "product_id",
      otherKey: "additional_id",
      as: "additionals",
    });
  }
}

const additionalsInclude = {
  model: Additional,
  as: "additionals",
  through: { attributes: [] },
  attributes: { exclude: ["createdAt", "updatedAt"] },
};

export const ProductModel = (sequelize: Sequelize) => {
  Product.init(
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },

      logo: {
        type: DataTypes.STRING,
        allowNull: false,
      },

      title: {
        type: DataTypes.JSON,
        allowNull: false,
      },

      description: {
        type: DataTypes.JSON,
        allowNull: false,
      },

      price: {
        type: DataTypes.JSON,
        allowNull: false,
      },

      category_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "categories",
          key: "id",
        },
      },
    },
    {
      sequelize,
      modelName: "Product",
      tableName: "products",
      defaultScope: {
        include: [additionalsInclude],
      },
      scopes: {
        byCategory(categoryId: number) {
          return {
            where: { category_id: categoryId },
            include: [additionalsInclude],
          };
        },
        bySearch(search: string) {
          return {
            where: {
              [Op.or]: [
                sequelize.where(
                  sequelize.fn("json_extract", sequelize.col("title"), "$.pt"),
                  { [Op.like]: `%${search}%` }
                ),
                sequelize.where(
                  sequelize.fn("json_extract", sequelize.col("title"), "$.en"),
                  { [Op.like]: `%${search}%` }
                ),
              ],
            },
            include: [additionalsInclude],
          };
        },
      },
    }
  );

  return Product;
};
