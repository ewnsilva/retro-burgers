export interface IHeader {
  setSearch: (query: string) => void;
}

export type AdditionalType = 'quantity' | 'boolean';

export interface ILanguages {
  pt: string;
  en: string;
}

export interface IPrice {
  brl: string;
  usd: string;
}

export interface IAdditionals {
  id: number;
  type: AdditionalType;
  price: IPrice;
  title: ILanguages;
  quantity?: number;
}
export interface IProducts {
  additionals: IAdditionals[];
  category_id: number;
  description: ILanguages;
  id: number;
  logo: string;
  price: IPrice;
  title: ILanguages;
}

export interface ICartProducts extends IProducts {
  totalPrice?: number;
  quantity?: number;
  isCustom?: boolean;
  additionals: IAdditionals[];
}

export interface IProductsList {
  category: number;
  item: IProducts;
  setSelectedProduct: (item: IProducts) => void;
  setCustomizeOpen: (boolean: boolean) => void;
}
