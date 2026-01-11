import { Model, DataTypes, Sequelize } from "sequelize";
import { AdditionalAttributes } from "../Interfaces/Additional.interfaces";
import { Product } from "modules/Product/Models/product";

export class Additional extends Model<AdditionalAttributes> {
  static associate() {
    Additional.belongsToMany(Product, {
      through: "product_additionals",
      foreignKey: "additional_id",
      otherKey: "product_id",
      as: "products",
    });
  }
}

export const AdditionalModel = (sequelize: Sequelize) => {
  Additional.init(
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },

      namePt: {
        type: DataTypes.STRING,
        allowNull: false,
      },

      nameEn: {
        type: DataTypes.STRING,
        allowNull: false,
      },

      pricePt: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false,
      },

      priceEn: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false,
      },

      type: {
        type: DataTypes.ENUM("quantity", "boolean"),
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "Additional",
      tableName: "additionals",
      timestamps: false,
    }
  );

  return Additional;
};
