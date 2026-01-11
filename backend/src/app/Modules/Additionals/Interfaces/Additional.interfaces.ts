export interface AdditionalAttributes {
  id: number;
  namePt: string;
  nameEn: string;
  pricePt: number;
  priceEn: number;
  type: "quantity" | "boolean";
  quantity?: number;
}
