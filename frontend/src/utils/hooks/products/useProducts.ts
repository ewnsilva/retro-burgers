import { useState } from 'react';

import { IProducts, useAxios } from 'utils';

export const useProducts = () => {
  const { api } = useAxios();
  const [products, setProducts] = useState<IProducts[]>([{} as IProducts]);

  const fetchProducts = (category: number) => {
    const url = `${process.env.REACT_APP_API_URL}/${category}`;
    api
      .get(url)
      .then(({ data }) => {
        setProducts(data);
      })
      .catch(err => console.log(err.response));
  };

  return { fetchProducts, products };
};
