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
    if (searchValue.length >= 3) {
      props.search(searchValue);
      resetInputField();
    } else {
    }
  };

  return (
    <form className="search">
      <input
        placeholder="Minimum 3 characters"
        type="text"
        value={searchValue}
        onChange={handleSearchInputChanges}
        required
        pattern="/^[a-zA-Z]{3,}$/"
      />
      <input type="submit" onClick={callSearchFunction} value="SEARCH" />
    </form>
  );
};
