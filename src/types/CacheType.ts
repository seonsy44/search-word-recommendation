import { AxiosRequestConfig, AxiosResponse } from 'axios';
import { Disease } from '.';

export type CacheProviderProps = {
  children: React.ReactNode;
};

export type Response = Disease[];

export type CacheConfig = {
  cache: Map<string, Response>;
  fetch:
    | (() => undefined)
    | ((
        url: string,
        api: (config: AxiosRequestConfig) => Promise<AxiosResponse<Response>>,
        apiConfig: AxiosRequestConfig,
        {
          onSuccess,
          onError,
        }: {
          onSuccess: (data: Response | undefined) => void;
          onError?: ((status: number) => void) | undefined;
        }
      ) => Promise<void>);
};
