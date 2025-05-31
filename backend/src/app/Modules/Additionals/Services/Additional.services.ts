import { Services } from "shared/Services/Services";
import { Additional } from "../Models/additional";

export class AdditionalServices extends Services<Additional> {
  constructor() {
    super(Additional);
  }
}
