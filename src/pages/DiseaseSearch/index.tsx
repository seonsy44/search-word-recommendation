import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { flexBox } from '../../styles/mixins';
import SearchBar from './SearchBar';
import RecommendBox from './RecommendBox';
import RecommendItem from './RecommendItem';
import { useDiseaseSearch } from '../../context/DiseaseSearchContext';
import useUpDownKey from '../../hooks/useUpDownKey';

function DiseaseSearch() {
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
    <Container>
      <Title>국내 모든 임상시험 검색하고</Title>
      <Title>온라인으로 참여하기</Title>

      <SearchBar />

      {!!searchValue.length && (
        <RecommendBox>
          <div ref={divRef}>
            {diseases?.map(({ sickNm }) => (
              <RecommendItem key={sickNm} sickNm={sickNm} />
            ))}
          </div>
        </RecommendBox>
      )}
    </Container>
  );
}

export default DiseaseSearch;

const Container = styled.div`
  ${flexBox('column', 'flex-start')};
  width: 100%;
  height: 100vh;
  padding: 15vh;
  background-color: ${({ theme }) => theme.secondary};
`;

const Title = styled.h1`
  font-size: 30px;
  font-weight: 500;
  line-height: 40px;
`;
