import React, { useState } from 'react';
import '../styles/Header.css';

export const Header = props => {
  const [searchValue, setSearchValue] = useState('');

  const resetInputField = () => {
    setSearchValue('');
  };

  const callSearchFunction = event => {
    event.preventDefault();
    resetInputField();
    props.search('man');
  };

  return (
    <div className="header-div">
      <header className="app-header" onClick={callSearchFunction}>
        <h2>{props.text}</h2>
      </header>
    </div>
  );
};
