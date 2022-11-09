import React, { useMemo, useState } from 'react';
import { debounce } from 'lodash';
import { useDiseaseSearch } from '../context/DiseaseSearchContext';

function useSearchBar() {
  const [searchValue, setSearchValue] = useState('');
  const { getDiseases } = useDiseaseSearch();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => debouncedSearch(e.target.value);

  const debouncedSearch = useMemo(
    () =>
      debounce((value) => {
        setSearchValue(value);

        getDiseases({ q: value });
      }, 300),
    [searchValue]
  );

  return { handleChange };
}

export default useSearchBar;
