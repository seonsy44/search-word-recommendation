import React, { createContext, useContext } from 'react';
import { Disease } from '../types';

type CacheProviderProps = {
  children: React.ReactNode;
};

const cacheConfig = {
  cache: new Map<string, Disease[]>(),
};

const CacheContext = createContext(cacheConfig);

export const useCache = () => useContext(CacheContext);

export function CacheProvider({ children }: CacheProviderProps) {
  return React.createElement(
    CacheContext.Provider,
    { value: { cache: cacheConfig.cache } },
    React.Children.only(children)
  );
}
