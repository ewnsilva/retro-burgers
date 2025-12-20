export interface IHeader {
  setSearch: (query: string) => void;
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
  item: IProducts;
}
