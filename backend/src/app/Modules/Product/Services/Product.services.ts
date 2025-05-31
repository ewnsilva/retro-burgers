import { Services } from "shared/Services/Services";
import { Additional } from "modules/Additionals/Models/additional";
import { FindOptions } from "sequelize";

export class ProductServices extends Services {
  constructor() {
    super("Product");
  }

  private get defaultOptions(): FindOptions {
    return {
      include: [
        {
          model: Additional,
          as: "additionals",
          through: { attributes: [] },
        },
      ],
    };
  }

  async findAll() {
    return await super.findAll(this.defaultOptions);
  }

  async findById(id: number) {
    return await super.findById(id, this.defaultOptions);
  }
}
