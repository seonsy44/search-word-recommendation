import styled from 'styled-components';
import { MdSearch } from 'react-icons/md';
import { flexBox } from '../../styles/mixins';
import useSearchBar from '../../hooks/useSearchBar';

function SearchBar() {
  const { handleChange, handleSubmit } = useSearchBar();

  return (
    <Container onSubmit={handleSubmit}>
      <Input onChange={handleChange} placeholder="질환명을 입력해 주세요." />

      <SearchButton type="submit">
        <MdSearch />
      </SearchButton>
    </Container>
  );
}

export default SearchBar;

const Container = styled.form`
  position: relative;
  width: 600px;
  height: 80px;
  margin-top: 20px;
`;

const Input = styled.input`
  width: 100%;
  height: 100%;
  padding-left: 40px;
  padding-right: 80px;
  border-radius: 80px;
  background-color: white;
  font-size: 20px;

  &:focus {
    outline: solid 2px ${({ theme }) => theme.primary};
  }
`;

const SearchButton = styled.button`
  ${flexBox()};
  position: absolute;
  right: 10px;
  top: 10px;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.primary};
  color: white;
  font-size: 34px;
`;
