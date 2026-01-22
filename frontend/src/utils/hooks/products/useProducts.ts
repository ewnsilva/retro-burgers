import { useQuery } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';

import { useAxios } from 'utils/hooks/useAxios';
import { IProducts, ICategory } from 'utils/interfaces';

export const useProducts = (category?: number | null) => {
  const { api } = useAxios();
  const navigate = useNavigate();

  const categoriesQuery = useQuery<ICategory[], Error>({
    queryKey: ['categories'],
    queryFn: async () => {
      const { data } = await api.get(`${process.env.REACT_APP_API_URL}/categories`);
      return data;
    },
  });

  const productsQuery = useQuery<IProducts[], Error>({
    queryKey: ['products', category],
    enabled: !!category,
    queryFn: async () => {
      const { data } = await api.get(`${process.env.REACT_APP_API_URL}/products/${category}`);
      return data;
    },
  });

  if (categoriesQuery.isError || productsQuery.isError) {
    navigate('/error');
  }

  return {
    categories: categoriesQuery.data ?? [],
    products: productsQuery.data ?? [],

    isLoading: categoriesQuery.isLoading || productsQuery.isLoading,

    isError: categoriesQuery.isError || productsQuery.isError,
  };
};
