import styled from 'styled-components';
import { FaSearch } from 'react-icons/fa';

export const StyledSearchBar = styled.div`
  width: 100%;
  height: 105px;
  background: #1c1c1c;
  padding: 25px 20px 0px 20px;
  box-sizing: border-box;
  color: #fff;
`;

export const StyledSearchBarContent = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  max-width: 1280px;
  width: 100%;
  height: 55px;
  background: #353535;
  border-radius: 40px;
  color: #fff;

    @media screen and (max-width: 720px) {
      font-size: 28px;
    }
  }
`;

export const StyledIcon = styled(FaSearch)`
  font-size: 26px;
  margin: 0 1rem;
  color: #fff;
  z-index: 1000;
`;

export const StyledInput = styled.input`
  font-family: 'Abel', sans-serif;
  font-size: 28px;
  margin: 8px 0;
  padding: 0 0 0 30px;
  border: 0;
  width: 95%;
  background: transparent;
  height: 40px;
  color: #fff;
  box-sizing: border-box;

  :focus {
    outline: none;
  }
`;
