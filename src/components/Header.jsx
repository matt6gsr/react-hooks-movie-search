import React from 'react';
import '../styles/Header.css';

const Header = props => {
  return (
    <div>
      <header className="Header">
        <h2>{props.text}</h2>
      </header>
    </div>
  );
};

export default Header;
