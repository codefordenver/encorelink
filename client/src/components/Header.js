import React from 'react';
import { Link } from 'react-router';

function Header() {
  return (
    <header className="top-bar">
      <div className="top-bar-left">
        <img className="logo-img" src="public/img/encorelink-logo.png" alt="EncoreLink" />
      </div>
      <div className="top-bar-right text-right">
        <Link className="button" to="/login">Log in</Link>
      </div>
    </header>
  );
}

export default Header;
