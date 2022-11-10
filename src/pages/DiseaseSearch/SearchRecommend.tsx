import { useEffect, useRef } from 'react';
import { useDiseaseSearch } from '../../context/DiseaseSearchContext';
import useUpDownKey from '../../hooks/useUpDownKey';
import RecommendBox from './RecommendBox';
import RecommendItem from './RecommendItem';

function SearchRecommend() {
  const { diseases, searchValue } = useDiseaseSearch();
  const divRef = useRef<HTMLDivElement | null>(null);
  const { handleKeyDown } = useUpDownKey(divRef);

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
          <div ref={divRef}>
            {diseases?.map(({ sickNm }) => (
              <RecommendItem key={sickNm} sickNm={sickNm} />
            ))}
          </div>
        </RecommendBox>
      )}
    </>
  );
}

export default SearchRecommend;
