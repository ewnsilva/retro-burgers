import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { useAxios } from 'utils/hooks/useAxios';
import { IProducts, ICategory } from 'utils/interfaces';

export const useProducts = () => {
  const { api } = useAxios();
  const navigate = useNavigate();

  const [products, setProducts] = useState<IProducts[]>([]);
  const [categories, setCategories] = useState<ICategory[]>([]);

  const fetchProducts = (category: number) => {
    const url = `${process.env.REACT_APP_API_URL}/products/${category}`;
    api
      .get(url)
      .then(({ data }) => {
        setProducts(data);
      })
      .catch(() => {
        navigate('/error');
      });
  };

  const fetchCategories = () => {
    const url = `${process.env.REACT_APP_API_URL}/categories`;
    api
      .get(url)
      .then(({ data }) => {
        setCategories(data);
      })
      .catch(() => {
        navigate('/error');
      });
  };

  return {
    products,
    categories,
    fetchProducts,
    fetchCategories,
  };
};
