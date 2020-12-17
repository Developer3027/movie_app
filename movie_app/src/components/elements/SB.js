import React, { useState, useRef } from 'react';
import {
  StyledSearchBar,
  StyledSearchBarContent,
  StyledIcon,
  StyledInput,
} from '../styles/StyledSearchBar';

const SB = ({ callback }) => {
  const [search, setSearch] = useState('');
  const timeOut = useRef(null);

  const doSearch = (e) => {
    const { value } = e.target;

    clearTimeout(timeOut.current);
    setSearch(value);

    timeOut.current = setTimeout(() => {
      callback(value);
    }, 500);
  };

  return (
    <StyledSearchBar>
      <StyledSearchBarContent>
        <StyledIcon name='search' />
        <StyledInput
          type='text'
          placeholder='Search Movies'
          onChange={doSearch}
          value={search}
        />
      </StyledSearchBarContent>
    </StyledSearchBar>
  );
};
export default SB;
