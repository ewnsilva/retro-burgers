import axios, { AxiosInstance } from 'axios';

type UseAxios = {
  api: AxiosInstance;
};

const api = axios.create();

api.interceptors.response.use(
  (response: any) => response,
  (error: { response: { status: number } }) => {
    if (error.response.status === 404) {
      alert('Não encontrado.');
    }
    return Promise.reject(error);
  }
);

export const useAxios = (): UseAxios => {
  return { api };
};
