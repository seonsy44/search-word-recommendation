import React from 'react';
import styled from 'styled-components';
import { flexBox } from '../../styles/mixins';

type RecommendBoxProps = {
  children: React.ReactNode;
};

function RecommendBox({ children }: RecommendBoxProps) {
  return (
    <Container>
      <SubTitle>추천 검색어</SubTitle>
      {children?.toString().length ? children : <NoContent>검색어 없음</NoContent>}
    </Container>
  );
}

export default RecommendBox;

const Container = styled.div`
  width: 600px;
  max-height: 350px;
  margin-top: 20px;
  padding: 20px;
  border-radius: 20px;
  background-color: white;
  overflow-y: scroll;

  &::-webkit-scrollbar {
    display: none;
  }
`;

const SubTitle = styled.h3`
  margin-bottom: 10px;
  font-size: 14px;
  color: ${({ theme }) => theme.gray};
`;

const NoContent = styled.div`
  ${flexBox()};
  width: 100%;
  height: 40px;
`;
