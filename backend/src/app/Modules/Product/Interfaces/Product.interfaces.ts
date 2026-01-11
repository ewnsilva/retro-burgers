export interface ProductAttributes {
  id?: number;
  image: string;
  namePt: string;
  descriptionPt?: string;
  pricePt: number;
  nameEn: string;
  descriptionEn?: string;
  priceEn: number;
  logo?: string;
  category_id: number;
}
