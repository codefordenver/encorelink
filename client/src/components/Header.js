import React, { PropTypes } from 'react';
import { Link } from 'react-router';

function Header({ userId, logoutUser }) {
  const loggedIn = (
    <div>
      <div>
        {userId}
        <button className="button" onClick={logoutUser}>Log out</button>
      </div>
      <div>
        {userId}
        <a href="./OrganizerDashboard">To Dashboard</a>"
      </div>
    </div>
  );
  const loggedOut = (
    <Link className="button" to="/login">Log in</Link>
  );
  return (
    <header className="top-bar">
      <div className="top-bar-left">
        <img className="logo-img" src="public/img/encorelink-logo.png" alt="EncoreLink" />
      </div>
      <div className="top-bar-right text-right">
        {userId ? loggedIn : loggedOut}
      </div>
    </header>
  );
}

Header.propTypes = {
  userId: PropTypes.number,
  logoutUser: PropTypes.func.isRequired
};

export default Header;
