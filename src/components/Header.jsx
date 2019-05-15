import React from 'react';
import '../styles/Header.css';

export const Header = props => {
  return (
    <div className="header-div">
      <header className="app-header">
        <h2>{props.text}</h2>
      </header>
    </div>
  );
};
