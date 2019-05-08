import React from 'react';
import '../styles/Header.css';

export const Header = props => {
  return (
    <div id="hdr">
      <header className="Header">
        <h2>{props.text}</h2>
      </header>
    </div>
  );
};

export default Header;
