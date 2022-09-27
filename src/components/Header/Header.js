import React from 'react';
import { memo } from 'react';
import "./Header.scss";

const Header = memo(function () {
  return (
    <header className="header">
      <div className="header__container">
        <h2 className="header__title">Currency сonverter by Bakirov</h2>
      </div>
    </header>
  )
})

export default Header;