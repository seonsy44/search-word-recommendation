import { useState } from 'react';
import { useCache } from '../context/CacheContext';
import { searchDiseases } from '../service/DiseaseSearchService';
import { Disease } from '../types';

function useDiseaseSearch() {
  const [diseases, setDiseases] = useState<Disease[] | undefined>([]);
  const [isLoading, setIsLoading] = useState(false);
  const { cache } = useCache();

  const getDiseases = async (params: { q: string }) => {
    setIsLoading(true);

    if (cache.has(`/sick?q=${params.q}`)) {
      setDiseases(cache.get(`/sick?q=${params.q}`));
      setIsLoading(false);
    }

    const { data, status } = await searchDiseases(params);

    if (status >= 200 && status < 300) {
      cache.set(`/sick?q=${params.q}`, data);
      setDiseases(data);
      setIsLoading(false);
    }
  };

  return { diseases, getDiseases, isLoading };
}

export default useDiseaseSearch;
