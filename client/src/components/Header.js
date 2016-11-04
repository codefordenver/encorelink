import React, { PropTypes } from 'react';
import { Link } from 'react-router';

class Header extends React.Component {
  static propTypes = {
    isLoggedIn: PropTypes.bool.isRequired,
    logoutUser: PropTypes.func.isRequired,
    user: PropTypes.object
  };

  render() {
    const loggedIn = (
      <div>
        Hello, {this.props.user.email}
        <button className="button" onClick={this.props.logoutUser}>Log out</button>
      </div>
    );
    const loggedOut = (
      <Link className="button" to="/login">Log in</Link>
    );
    return (
      <header className="top-bar">
        <div className="top-bar-left">
          <img className="logo-img" src="/public/img/encorelink-logo.png" alt="EncoreLink" />
        </div>
        <div className="top-bar-right text-right">
          {this.props.isLoggedIn ? loggedIn : loggedOut}
        </div>
      </header>
    );
  }
}

export default Header;
