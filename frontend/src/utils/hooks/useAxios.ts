import axios, { AxiosError, AxiosInstance } from 'axios';

type UseAxios = {
  api: AxiosInstance;
};

const api = axios.create();

api.interceptors.response.use(
  response => response,
  (error: AxiosError) => {
    const status = error.response?.status;

    if (status === 404) {
      alert('Não encontrado.');
    }

    return Promise.reject(error);
  }
);

export const useAxios = (): UseAxios => {
  return { api };
};
