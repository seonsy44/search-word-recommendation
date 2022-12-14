import { useRef } from 'react';
import styled from 'styled-components';
import useSearchBar from '../../hooks/useSearchBar';
import { flexBox } from '../../styles/mixins';
import SearchBar from './SearchBar';
import SearchRecommend from './SearchRecommend';

function DiseaseSearch() {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const { handleChange, handleSubmit, focusInput } = useSearchBar(inputRef);

  return (
    <Container>
      <Title>국내 모든 임상시험 검색하고</Title>
      <Title>온라인으로 참여하기</Title>

      <SearchBar inputRef={inputRef} onChange={handleChange} onSubmit={handleSubmit} />

      <SearchRecommend focusInput={focusInput} inputRef={inputRef} />
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
