import React, { useEffect, useMemo, useState } from 'react';
import { useDiseaseSearch } from '../context/DiseaseSearchContext';
import { debounce } from '../utils';

function useSearchBar(inputRef: React.MutableRefObject<HTMLInputElement | null>) {
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
      debounce((value: string) => {
        setSearchValue(value);

        getDiseases({ params: { q: value } });
      }, 300),
    [searchValue]
  );

  const focusInput = (setFocusIndex?: React.Dispatch<React.SetStateAction<number>>) => {
    if (setFocusIndex) setFocusIndex(-1);

    const { length } = inputRef.current?.value || { length: 0 };
    inputRef.current?.focus();
    setTimeout(() => {
      inputRef.current?.setSelectionRange(length, length);
    }, 0);
  };

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.value = '';
      inputRef.current.focus();
    }
  }, []);

  return { handleChange, handleSubmit, focusInput };
}

export default useSearchBar;
