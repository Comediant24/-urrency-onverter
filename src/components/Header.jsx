import React from 'react';
import logo from '../images/logo.png';

function Header() {
  return (
    <header className="header">
      <div className="header__logo-container">
        <img src={logo} alt="Супер лого Конвертера" className="header__logo" />
        <p className="header__logo-sub">Мой Конвертер Валют</p>
      </div>
    </header>
  );
}

export default Header;
