import { AxiosRequestConfig } from 'axios';
import React, { createContext, useContext, useState } from 'react';
import { Disease } from '../types';
import { DiseaseSearchConfig, DiseaseSearchProviderProps } from '../types/DiseaseSearchType';
import { useCache } from './CacheContext';

const diseaseSearchConfig = {
  diseases: <Disease[]>[],
  getDiseases: () => undefined,
  searchValue: '',
};

const DiseaseSearchContext = createContext<DiseaseSearchConfig>(diseaseSearchConfig);

export const useDiseaseSearch = () => useContext(DiseaseSearchContext);

export function DiseaseSearchProvider({ children, DiseaseSearchService }: DiseaseSearchProviderProps) {
  const [diseases, setDiseases] = useState<Disease[] | undefined | unknown>([]);
  const [searchValue, setSearchValue] = useState('');
  const { fetch } = useCache();

  const getDiseases = ({ params: { q } }: AxiosRequestConfig) => {
    if (!q.length) {
      setDiseases([]);
      setSearchValue('');
      return;
    }

    setSearchValue(q);

    fetch(
      `/sick?q=${q}`,
      DiseaseSearchService.searchDiseases,
      { params: { q } },
      { onSuccess: (data) => setDiseases(data) }
    );
  };

  return React.createElement(
    DiseaseSearchContext.Provider,
    { value: { diseases, getDiseases, searchValue } },
    React.Children.only(children)
  );
}
