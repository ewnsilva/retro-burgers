import { Model, DataTypes, Sequelize } from "sequelize";
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

export const ProductModel = (sequelize: Sequelize) => {
  Product.init(
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
      description: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      price: {
        type: DataTypes.FLOAT,
        allowNull: false,
      },
      logo: {
        type: DataTypes.STRING,
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
        include: [
          {
            model: Additional,
            as: "additionals",
            through: { attributes: [] },
            attributes: { exclude: ["createdAt", "updatedAt"] },
          },
        ],
      },
    }
  );

  return Product;
};
