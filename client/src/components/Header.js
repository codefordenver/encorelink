import React, { PropTypes } from 'react';
import { Link } from 'react-router';

class Header extends React.Component {
  static propTypes = {
    isLoggedIn: PropTypes.bool.isRequired,
    logoutUser: PropTypes.func.isRequired,
    user: PropTypes.object,
    isMusician: PropTypes.bool.isRequired
  };

  render() {
    const loggedIn = (
      <div>
        Hello, <Link to={this.props.isMusician ? '/musicianProfile' : '/organizerProfile'}>{this.props.user.email}</Link>
        {' '}
        <Link className="button" to="/dashboard">Dashboard</Link>
        {' '}
        <button className="button" onClick={this.props.logoutUser}>Log out</button>
      </div>
    );
    const loggedOut = (
      <Link className="button" to="/login">Log in</Link>
    );
    return (
      <header className="top-bar">
        <div className="top-bar-left">
          <Link to={this.props.isLoggedIn ? '/events' : '/'}><img className="logo-img" src="/public/img/encorelink-logo.png" alt="EncoreLink" /></Link>
        </div>
        <div className="top-bar-right text-right">
          {this.props.isLoggedIn ? loggedIn : loggedOut}
        </div>
      </header>
    );
  }
}

export default Header;
