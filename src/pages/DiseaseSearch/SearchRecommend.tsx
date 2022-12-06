import { useEffect, useRef } from 'react';
import { useDiseaseSearch } from '../../context/DiseaseSearchContext';
import useUpDownKey from '../../hooks/useUpDownKey';
import RecommendBox from './RecommendBox';
import RecommendItem from './RecommendItem';

type Props = {
  focusInput: (setFocusIndex?: React.Dispatch<React.SetStateAction<number>>) => void;
  inputRef: React.MutableRefObject<HTMLInputElement | null>;
};

function SearchRecommend({ focusInput, inputRef }: Props) {
  const { diseases, searchValue } = useDiseaseSearch();
  const ulRef = useRef<HTMLUListElement | null>(null);
  const { handleKeyDown } = useUpDownKey(ulRef, inputRef, focusInput);

  useEffect(() => {
    if (searchValue.length) {
      document.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [searchValue]);

  return (
    <>
      {!!searchValue.length && (
        <RecommendBox>
          <ul ref={ulRef}>
            {diseases?.map(({ sickNm }) => (
              <RecommendItem key={sickNm} sickNm={sickNm} />
            ))}
          </ul>
        </RecommendBox>
      )}
    </>
  );
}

export default SearchRecommend;
