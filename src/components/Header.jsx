import React from 'react';
import logo from '../images/logo.svg';

function Header() {
  return (
    <header className="header">
      <div className="header__logo-container">
        <a href="./">
          <img
            src={logo}
            alt="Супер лого Конвертера"
            className="header__logo"
          />
        </a>
        <p className="header__logo-sub">Мой Конвертер Валют</p>
      </div>
    </header>
  );
}

export default Header;
