import { Controller } from "shared/Controllers/Controller";
import { AdditionalServices } from "../Services/Additional.services";

const additionalServices = new AdditionalServices();

export class AdditionalController extends Controller<AdditionalServices> {
  constructor() {
    super(additionalServices);
  }
}

export default AdditionalController;
