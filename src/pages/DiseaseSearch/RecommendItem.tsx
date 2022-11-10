import React, { useState } from 'react';
import styled from 'styled-components';
import { MdSearch } from 'react-icons/md';
import { flexBox } from '../../styles/mixins';
import { useDiseaseSearch } from '../../context/DiseaseSearchContext';
import { parseSickNm } from '../../utils';
import useFocus from '../../hooks/useFocus';

type RecommendItemProps = {
  sickNm: string;
};

function RecommendItem({ sickNm }: RecommendItemProps) {
  const { isFocused, handleFocus, handleBlur } = useFocus();
  const { searchValue } = useDiseaseSearch();
  const parsedSickNm = parseSickNm(sickNm, searchValue);

  return (
    <Anchor href={`/sick/${sickNm}`} onFocus={handleFocus} onBlur={handleBlur}>
      <Container isFocused={isFocused}>
        <IconContainer>
          <MdSearch />
        </IconContainer>

        <span dangerouslySetInnerHTML={{ __html: parsedSickNm }} />
      </Container>
    </Anchor>
  );
}

export default React.memo(RecommendItem);

const Anchor = styled.a`
  &:focus {
    outline: none;
  }
`;

const Container = styled.div<{ isFocused: boolean }>`
  ${flexBox('row', 'flex-start')};
  width: 100%;
  padding: 12px 5px;
  border-radius: 5px;
  cursor: pointer;
  background-color: ${({ theme, isFocused }) => (isFocused ? theme.secondary : 'white')};

  &:hover {
    background-color: ${({ theme }) => theme.secondary};
  }

  > span {
    margin-left: 5px;
    transform: translateY(2px);

    > b {
      font-weight: 700;
    }
  }
`;

const IconContainer = styled.div`
  ${flexBox()}
  color: ${({ theme }) => theme.gray}
`;
