import React from 'react';

function Header() {
  return (
    <header className="top-bar">
      <div className="top-bar-left">
        <img className="logo-img" src="public/img/encorelink-logo.png" alt="EncoreLink" />
      </div>
      <div className="top-bar-right text-right">
        <button className="button" value="getStarted" type="submit">Get Started Today</button>
        <button className="button secondary" value="login" type="submit">Log in</button>
      </div>
    </header>
  );
}

export default Header;
