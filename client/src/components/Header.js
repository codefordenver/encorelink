import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router';

function Header({ isLoggedIn, isMusician, logoutUser, user }) {
  const loggedIn = (
    <div>
      Hello, <Link to={isMusician ? '/musicianProfile' : '/organizerProfile'}>
        { user && user.email }
      </Link>
      {' '}
      {isMusician && (
        <Link className="button" to="/dashboard">Dashboard</Link>
      )}
      {' '}
      <button className="button" onClick={logoutUser}>Log out</button>
    </div>
  );
  const loggedOut = (
    <span>
      <Link to="/about">About Us</Link>
      <Link className="button login" to="/login">Log in</Link>
    </span>
  );
  return (
    <header className="top-bar">
      <div className="top-bar-left">
        <Link to={isLoggedIn ? '/dashboard' : '/'}>
          <img alt="EncoreLink" className="logo-img" src="/public/img/encorelink-logo.png" />
        </Link>
      </div>
      <div className="top-bar-right text-right">
        {isLoggedIn ? loggedIn : loggedOut}
      </div>
    </header>
  );
}

Header.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
  isMusician: PropTypes.bool.isRequired,
  logoutUser: PropTypes.func.isRequired,
  user: PropTypes.shape({
    email: PropTypes.string.isRequired
  })
};

export default Header;
