import React, { PropTypes } from 'react';
import { withRouter } from 'react-router';

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
      <div className="register-box">
        <div className="register-signup">Signup</div>
        <form className="form-register" onSubmit={this.handleFormSubmit}>
          <div>Username:</div>
          <input type="text"
            onChange={this.handleUsernameChange}
            placeholder="Username"
            required
            autoFocus
          />
          <div>Email:</div>
          <input type="text"
            onChange={this.handleEmailChange}
            placeholder="Email"
            required
          />
          <div>Password:</div>
          <input type="password"
            onChange={this.handlePasswordChange}
            placeholder="Password"
            required
          />
          <div>Are you signing up as a:</div>
          <div>
            <input type="radio" name="role" value="organizer" /> Organizer
            <input type="radio" name="role" value="musician" /> Musician
          </div>
          <div>
            <input type="checkbox" name="terms" value="agree" />
            Agree to <a href="">EncoreLink Terms</a>
          </div>
          <button value="getStarted" className="button" type="submit">
            Get Started Today
          </button>
        </form>
        <div>
          <span>{this.props.errorMessage}</span>
        </div>
      </div>
    );
  }
}


export default withRouter(Register);
