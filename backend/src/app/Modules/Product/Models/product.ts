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

      image: {
        type: DataTypes.STRING,
        allowNull: false,
      },

      namePt: {
        type: DataTypes.STRING,
        allowNull: false,
      },

      descriptionPt: {
        type: DataTypes.STRING,
        allowNull: false,
      },

      pricePt: {
        type: DataTypes.FLOAT,
        allowNull: false,
      },

      nameEn: {
        type: DataTypes.STRING,
        allowNull: false,
      },

      descriptionEn: {
        type: DataTypes.STRING,
        allowNull: false,
      },

      priceEn: {
        type: DataTypes.FLOAT,
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
                { namePt: { [Op.like]: `%${search}%` } },
                { nameEn: { [Op.like]: `%${search}%` } },
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
