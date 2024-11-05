export interface IProducts {
  id: number;
  image: string;
  name: string;
  description: string;
  price: number;
}

export interface IProductsList {
  item: IProducts;
}
