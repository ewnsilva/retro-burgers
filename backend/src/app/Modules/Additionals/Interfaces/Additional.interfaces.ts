export interface AdditionalTitle {
  pt: string;
  en: string;
}

export interface AdditionalPrice {
  brl: string;
  usd: string;
}

export interface AdditionalAttributes {
  id?: number;
  title: AdditionalTitle;
  price: AdditionalPrice;
  type: "quantity" | "boolean";
  quantity?: number;
}
