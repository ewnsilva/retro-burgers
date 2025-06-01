import { useState } from 'react';

import { ICategories, useAxios } from 'utils';

export const useCategories = () => {
  const { api } = useAxios();
  const [categories, setCategories] = useState<ICategories[]>([{} as ICategories]);

  const fetchCategories = () => {
    const url = `${process.env.REACT_APP_API_URL}/categories`;
    api
      .get(url)
      .then(({ data }) => {
        setCategories(data);
      })
      .catch(err => console.log(err.response));
  };

  return { fetchCategories, categories };
};
