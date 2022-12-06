import React from 'react';
import styled from 'styled-components';
import { MdSearch } from 'react-icons/md';
import { flexBox } from '../../styles/mixins';
import { useDiseaseSearch } from '../../context/DiseaseSearchContext';
import useFocus from '../../hooks/useFocus';
import ParsedName from './ParsedName';

type RecommendItemProps = {
  sickNm: string;
};

function RecommendItem({ sickNm }: RecommendItemProps) {
  const { isFocused, handleFocus, handleBlur } = useFocus();
  const { searchValue } = useDiseaseSearch();

  return (
    <Container isFocused={isFocused}>
      <Anchor
        href={`${process.env.REACT_APP_CLINICAL_TRIALS_KOREA}/studies?conditions=${sickNm}`}
        onFocus={handleFocus}
        onBlur={handleBlur}>
        <IconContainer>
          <MdSearch />
        </IconContainer>

        <div>
          <ParsedName sickNm={sickNm} query={searchValue} />
        </div>
      </Anchor>
    </Container>
  );
}

export default React.memo(RecommendItem);

const Container = styled.li<{ isFocused: boolean }>`
  width: 100%;
  padding: 15px 5px;
  border-radius: 5px;
  cursor: pointer;
  background-color: ${({ theme, isFocused }) => (isFocused ? theme.secondary : 'white')};

  &:hover {
    background-color: ${({ theme }) => theme.secondary};
  }
`;

const Anchor = styled.a`
  ${flexBox('row', 'flex-start')};

  &:focus {
    outline: none;
  }
`;

const IconContainer = styled.div`
  ${flexBox()}
  color: ${({ theme }) => theme.gray};
  margin-right: 10px;
`;
