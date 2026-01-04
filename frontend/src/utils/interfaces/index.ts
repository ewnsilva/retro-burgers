export interface IHeader {
  setSearch: (query: string) => void;
}

export type AdditionalType = 'quantity' | 'boolean';

export interface IAdditional {
  id: number;
  namePt: string;
  nameEn: string;
  pricePt: number;
  priceEn: number;
  type: AdditionalType;
  quantity?: number;
}
export interface IProducts {
  id: number;
  image: string;
  namePt: string;
  descriptionPt?: string;
  pricePt: number;
  nameEn: string;
  descriptionEn?: string;
  priceEn: number;
}

export interface IProductsList {
  category: number;
  item: IProducts;
  setSelectedProduct: (item: IProducts) => void;
  setCustomizeOpen: (boolean: boolean) => void;
}
