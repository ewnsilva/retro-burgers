import { useState } from 'react';

import { useAxios } from 'utils/hooks/useAxios';
import { IAdditional, IProducts } from 'utils/interfaces';

export const useProducts = () => {
  const { api } = useAxios();
  const [additionals, setAdditionals] = useState<IAdditional[]>([{} as IAdditional]);
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

  const fetchAdditionals = () => {
    const url = `${process.env.REACT_APP_API_URL}/additionals`;
    api
      .get(url)
      .then(({ data }) => {
        setAdditionals(data);
      })
      .catch(err => console.log(err.response));
  };

  return { fetchProducts, fetchAdditionals, additionals, products };
};
