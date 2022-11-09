import axios, { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';

type GetAxiosInstanceType = (baseURL: string, options?: AxiosRequestConfig) => AxiosInstance;

const getAxiosInstance: GetAxiosInstanceType = (baseURL, options) => {
  const DEFAULT_CONFIG: AxiosRequestConfig = {
    baseURL,
    ...options,
    headers: {
      'Content-Type': 'application/json',
      ...options?.headers,
    },
  };

  const axiosInstance = axios.create(DEFAULT_CONFIG);

  axiosInstance.interceptors.response.use(
    (config: AxiosResponse) => config,
    (error: AxiosError) => error.response
  );

  return axiosInstance;
};

export default getAxiosInstance;
