export interface ProductTitle {
  pt: string;
  en: string;
}

export interface ProductDescription {
  pt: string;
  en: string;
}

export interface ProductPrice {
  brl: string;
  usd: string;
}

export interface ProductAttributes {
  id?: number;
  logo: string;
  title: ProductTitle;
  description: ProductDescription;
  price: ProductPrice;
  category_id: number;
}
