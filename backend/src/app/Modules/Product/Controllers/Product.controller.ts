import { Controller } from "shared/Controllers/Controller";
import { ProductServices } from "../Services/Product.services";
import { Request, Response } from "express";

const productServices = new ProductServices();

export class ProductController extends Controller<ProductServices> {
  constructor() {
    super(productServices);
  }

  async findAllInCategory(req: Request, res: Response): Promise<void> {
    const { category_id: id } = req.params;

    try {
      const products = await this.service.findAllInCategory(Number(id));
      res.status(200).json(products);
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  }
}

export default ProductController;
