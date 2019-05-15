import React, { useState } from 'react';
import '../styles/Search.css';

export const Search = props => {
  const [searchValue, setSearchValue] = useState('');

  const handleSearchInputChanges = event => {
    setSearchValue(event.target.value);
  };

  const resetInputField = () => {
    setSearchValue('');
  };

  const callSearchFunction = event => {
    event.preventDefault();
    props.search(searchValue);
    resetInputField();
  };

  return (
    <form className="search">
      <input
        type="text"
        value={searchValue}
        onChange={handleSearchInputChanges}
      />
      <input type="submit" onClick={callSearchFunction} value="SEARCH" />
    </form>
  );
};
