import React, { PropTypes } from 'react';
import { Link, withRouter } from 'react-router';

class Register extends React.Component {
  static propTypes = {
    errorMessage: PropTypes.string,
    registerRequest: PropTypes.func.isRequired,
    router: PropTypes.shape({
      push: PropTypes.func.isRequired
    }).isRequired
  };

  constructor(props) {
    super(props);
    this.state = {
      password: '',
      email: ''
    };
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.isLoggedIn) {
      this.props.router.push('/home');
    }
  }

  handlePasswordChange(ev) {
    this.setState({ password: ev.target.value });
  }

  handleEmailChange(ev) {
    this.setState({ email: ev.target.value });
  }

  handleFormSubmit(ev) {
    ev.preventDefault();
    this.props.registerRequest(this.state.email, this.state.password);
  }

  render() {
    return (
      <div className="register blue-bkgd2">
        <h3>Signup</h3>
        <form className="form-register" onSubmit={this.handleFormSubmit}>
          <label>Email
            <input type="text"
              onChange={this.handleEmailChange}
              placeholder="Email"
              required
              autoFocus
            />
          </label>
          <label>Password
            <input type="password"
              onChange={this.handlePasswordChange}
              placeholder="Password"
              required
            />
          </label>
          <button className="button dark-green-btn" type="submit">Register</button>
        </form>
        <div>
          <span>{this.props.errorMessage}</span>
        </div>
        <p>
          Already have an account?&nbsp;
          <Link to="/login">Login</Link>
        </p>
      </div>
    );
  }
}


export default withRouter(Register);
