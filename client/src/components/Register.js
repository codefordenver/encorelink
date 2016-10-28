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
      email: '',
      isMusician: false
    };
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handleVolunteerChange = this.handleVolunteerChange.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.isLoggedIn) {
      if (nextProps.isMusician) {
        this.props.router.push('/events');
      } else {
        this.props.router.push('/createEvent');
      }
    }
  }

  handlePasswordChange(ev) {
    this.setState({ password: ev.target.value });
  }

  handleEmailChange(ev) {
    this.setState({ email: ev.target.value });
  }

  handleVolunteerChange(ev) {
    this.setState({ isMusician: ev.target.checked });
  }

  handleFormSubmit(ev) {
    ev.preventDefault();
    this.props.registerRequest(this.state.email, this.state.password, this.state.isMusician);
  }

  render() {
    return (
      <div className="register">
        <h3>Sign up</h3>
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
          <label>I am a volunteer
            <input type="checkbox"
              checked={this.state.isMusician}
              onChange={this.handleVolunteerChange}
            />
          </label>
          <label>By clicking Register, you agree to the site
            <Link to="/terms"> terms</Link>
          </label>
          <button className="button secondary" type="submit">Register</button>
        </form>
        <div>
          <span>{this.props.errorMessage}</span>
        </div>
        <p>
          Already have an account?&nbsp;
          <Link to="/login">Log in</Link>
        </p>
      </div>
    );
  }
}


export default withRouter(Register);
