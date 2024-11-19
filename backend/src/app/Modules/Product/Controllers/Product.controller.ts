import { Controller } from "shared/Controllers/Controller";
import { ProductServices } from "../Services/Product.services";

const productServices = new ProductServices();

export class ProductController extends Controller<ProductServices> {
  constructor() {
    super(productServices);
  }
}

export default ProductController;
