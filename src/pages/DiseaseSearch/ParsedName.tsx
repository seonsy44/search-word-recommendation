import React from 'react';
import styled from 'styled-components';

type Props = {
  sickNm: string;
  query: string;
};

function ParsedName({ sickNm, query }: Props) {
  const splitList = sickNm.split(new RegExp(`(${query})`, 'i'));
  let key = 0;

  return (
    <>
      {splitList.map((word) => (
        <React.Fragment key={`${key++}-${word}`}>
          {word.toLowerCase() === query.toLowerCase() ? <Bold>{word}</Bold> : <span>{word}</span>}
        </React.Fragment>
      ))}
    </>
  );
}

export default ParsedName;

const Bold = styled.b`
  font-weight: 700;
`;
