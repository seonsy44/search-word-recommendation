import styled from 'styled-components';
import { MdSearch } from 'react-icons/md';
import { flexBox } from '../../styles/mixins';
import { useDiseaseSearch } from '../../context/DiseaseSearchContext';
import { parseSickNm } from '../../utils';

type RecommendItemProps = {
  sickNm: string;
};

function RecommendItem({ sickNm }: RecommendItemProps) {
  const { searchValue } = useDiseaseSearch();
  const parsedSickNm = parseSickNm(sickNm, searchValue);

  return (
    <Container>
      <IconContainer>
        <MdSearch />
      </IconContainer>

      <span dangerouslySetInnerHTML={{ __html: parsedSickNm }} />
    </Container>
  );
}

export default RecommendItem;

const Container = styled.li`
  ${flexBox('row', 'flex-start')};
  width: 100%;
  padding: 12px 5px;
  border-radius: 5px;
  cursor: pointer;

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
