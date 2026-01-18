import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { useAxios } from 'utils/hooks/useAxios';
import { IProducts, ICategory } from 'utils/interfaces';

export const useProducts = () => {
  const { api } = useAxios();
  const navigate = useNavigate();

  const [products, setProducts] = useState<IProducts[]>([]);
  const [categories, setCategories] = useState<ICategory[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchProducts = (category: number) => {
    const url = `${process.env.REACT_APP_API_URL}/products/${category}`;

    setIsLoading(true);
    api
      .get(url)
      .then(({ data }) => {
        setProducts(data);
      })
      .catch(() => {
        navigate('/error');
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const fetchCategories = () => {
    setIsLoading(true);
    const url = `${process.env.REACT_APP_API_URL}/categories`;
    api
      .get(url)
      .then(({ data }) => {
        setCategories(data);
      })
      .catch(() => {
        navigate('/error');
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return {
    products,
    categories,
    isLoading,
    fetchProducts,
    fetchCategories,
  };
};
