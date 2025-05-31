import { Services } from "shared/Services/Services";
import { Category } from "../Models/category";

export class CategoryServices extends Services<Category> {
  constructor() {
    super(Category);
  }
}
