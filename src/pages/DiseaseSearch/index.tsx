import { useState } from 'react';
import styled from 'styled-components';
import { flexBox } from '../../styles/mixins';
import SearchBar from './SearchBar';
import RecommendBox from './RecommendBox';
import RecommendItem from './RecommendItem';
import { useDiseaseSearch } from '../../context/DiseaseSearchContext';

function DiseaseSearch() {
  const [isFocused, setIsFocused] = useState(false);
  const { diseases } = useDiseaseSearch();

  return (
    <Container>
      <Title>국내 모든 임상시험 검색하고</Title>
      <Title>온라인으로 참여하기</Title>

      <SearchBar setIsFocused={setIsFocused} />

      {isFocused && (
        <RecommendBox>
          {diseases?.map(({ sickNm }) => (
            <RecommendItem key={sickNm} sickNm={sickNm} />
          ))}
        </RecommendBox>
      )}
    </Container>
  );
}

export default DiseaseSearch;

const Container = styled.div`
  ${flexBox('column', 'flex-start')}
  width: 100%;
  height: 100vh;
  padding: 10%;
  background-color: ${({ theme }) => theme.secondary};
`;

const Title = styled.h1`
  font-size: 30px;
  font-weight: 500;
  line-height: 40px;
`;
