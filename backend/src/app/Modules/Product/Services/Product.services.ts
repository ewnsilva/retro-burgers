import { Services } from "shared/Services/Services";
import { Additional } from "modules/Additionals/Models/additional";
import { Product } from "../Models/product";

export class ProductServices extends Services {
  constructor() {
    super("Product");
  }

  async findAll() {
    return Product.findAll({
      include: [
        {
          model: Additional,
          as: "additionals",
          through: { attributes: [] },
        },
      ],
    });
  }

  async findById(id: number) {
    return Product.findByPk(id, {
      include: [
        {
          model: Additional,
          as: "additionals",
          through: { attributes: [] },
        },
      ],
    });
  }
}
