import React, { useMemo, useState } from 'react';
import { debounce } from 'lodash';
import { useDiseaseSearch } from '../context/DiseaseSearchContext';

function useSearchBar() {
  const [searchValue, setSearchValue] = useState('');
  const { getDiseases } = useDiseaseSearch();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => debouncedSearch(e.target.value);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (searchValue)
      window.location.href = `${process.env.REACT_APP_CLINICAL_TRIALS_KOREA}/studies?conditions=${searchValue}`;
  };

  const debouncedSearch = useMemo(
    () =>
      debounce((value) => {
        setSearchValue(value);

        getDiseases({ params: { q: value } });
      }, 300),
    [searchValue]
  );

  return { handleChange, handleSubmit };
}

export default useSearchBar;
