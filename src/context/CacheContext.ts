import React, { createContext, useContext } from 'react';
import { Disease } from '../types';
import { CacheConfig, CacheProviderProps } from '../types/CacheType';

const cacheConfig: CacheConfig = {
  cache: new Map<string, Disease[]>(),
  fetch: () => undefined,
};

const CacheContext = createContext(cacheConfig);

export const useCache = () => useContext(CacheContext);

export function CacheProvider({ children }: CacheProviderProps) {
  const fetch: CacheConfig['fetch'] = async (url, api, apiConfig, { onSuccess, onError }) => {
    if (cacheConfig.cache.has(url)) {
      onSuccess(cacheConfig.cache.get(url));

      const { data, status } = await api(apiConfig);
      if (status >= 200 && status < 300) cacheConfig.cache.set(url, data);

      return;
    }

    const { data, status } = await api(apiConfig);
    console.info('calling api');

    if (status >= 200 && status < 300) {
      cacheConfig.cache.set(url, data);
      onSuccess(data);
    } else if (onError) {
      onError(status);
    }
  };

  return React.createElement(
    CacheContext.Provider,
    { value: { cache: cacheConfig.cache, fetch } },
    React.Children.only(children)
  );
}
