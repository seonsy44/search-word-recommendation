import React, { createContext, useContext, useState } from 'react';
import { Disease } from '../types';
import { DiseaseSearchConfig, DiseaseSearchProviderProps } from '../types/DiseaseSearch';
import { useCache } from './CacheContext';

const diseaseSearchConfig = {
  diseases: <Disease[]>[],
  getDiseases: () => undefined,
};

const DiseaseSearchContext = createContext<DiseaseSearchConfig>(diseaseSearchConfig);

export const useDiseaseSearch = () => useContext(DiseaseSearchContext);

export function DiseaseSearchProvider({ children, DiseaseSearchService }: DiseaseSearchProviderProps) {
  const [diseases, setDiseases] = useState<Disease[] | undefined>([]);
  const { cache } = useCache();

  const getDiseases = async (params: { q: string }) => {
    if (!params.q.length) return setDiseases([]);

    if (cache.has(`/sick?q=${params.q}`)) {
      setDiseases(cache.get(`/sick?q=${params.q}`));
    }

    const { data, status } = await DiseaseSearchService.searchDiseases(params);
    console.info('calling api');

    if (status >= 200 && status < 300) {
      cache.set(`/sick?q=${params.q}`, data);
      setDiseases(data);
    }
  };

  return React.createElement(
    DiseaseSearchContext.Provider,
    { value: { diseases, getDiseases } },
    React.Children.only(children)
  );
}
