export interface AdditionalTitle {
  pt: string;
  en: string;
}

export interface AdditionalAttributes {
  id?: number;
  title: AdditionalTitle;
  type: "quantity" | "boolean";
  quantity?: number;
}
