import styled from 'styled-components';
import { flexBox } from '../../styles/mixins';
import SearchBar from './SearchBar';

function DiseaseSearch() {
  return (
    <Container>
      <Title>국내 모든 임상시험 검색하고</Title>
      <Title>온라인으로 참여하기</Title>
      <SearchBar />
    </Container>
  );
}

export default DiseaseSearch;

const Container = styled.div`
  ${flexBox('column')}
  width: 100%;
  height: 100vh;
  background-color: ${({ theme }) => theme.secondary};
`;

const Title = styled.h1`
  font-size: 30px;
  font-weight: 500;
  line-height: 40px;
`;
