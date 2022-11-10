import { AxiosRequestConfig, AxiosResponse } from 'axios';
import { Disease } from '.';

export type CacheProviderProps = {
  children: React.ReactNode;
};

export type CacheConfig = {
  cache: Map<string, Disease[]>;
  fetch:
    | (() => undefined)
    | ((
        url: string,
        api: (config: AxiosRequestConfig) => Promise<AxiosResponse>,
        apiConfig: AxiosRequestConfig,
        {
          onSuccess,
          onError,
        }: {
          onSuccess: (data: unknown) => void;
          onError?: ((status: number) => void) | undefined;
        }
      ) => Promise<void>);
};
