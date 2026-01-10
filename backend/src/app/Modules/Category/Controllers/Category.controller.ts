import { Controller } from "shared/Controllers/Controller";
import { CategoryServices } from "../Services/Category.services";

const categoryServices = new CategoryServices();

export class CategoryController extends Controller<CategoryServices> {
  constructor() {
    super(categoryServices);
  }
}

export default CategoryController;
