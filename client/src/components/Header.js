import React, { PropTypes } from 'react';
import { Link } from 'react-router';

class Header extends React.Component {
  static propTypes = {
    userId: PropTypes.number,
    logoutUser: PropTypes.func.isRequired
  };

  render() {
    const loggedIn = (
      <div>
        Hello, ##User ID: {this.props.userId}##
        <button className="button" onClick={this.props.logoutUser}>Log out</button>
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
          {this.props.userId ? loggedIn : loggedOut}
        </div>
      </header>
    );
  }
}

export default Header;
