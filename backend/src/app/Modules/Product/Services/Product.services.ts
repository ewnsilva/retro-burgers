import { Services } from "shared/Services/Services";
import { Product } from "../Models/product";
import { ScopeOptions } from "sequelize";

export class ProductServices extends Services<Product> {
  constructor() {
    super(Product);
  }

  async findAllInCategory(id: number, search?: string) {
    const scopes: ScopeOptions[] = [{ method: ["byCategory", id] }];

    if (search) {
      scopes.push({ method: ["bySearch", search] });
    }

    return await super.findAll(scopes);
  }

}
