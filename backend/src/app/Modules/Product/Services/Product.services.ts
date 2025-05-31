import { Services } from "shared/Services/Services";
import { Product } from "../Models/product";

export class ProductServices extends Services<Product> {
  constructor() {
    super(Product);
  }

  async findAll() {
    return await super.findAll();
  }

  async findAllInCategory(id: number) {
    const options = {
      where: { category_id: id },
    };

    return await super.findAll(options);
  }

  async findById(id: number) {
    return await super.findById(id);
  }
}
