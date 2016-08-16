import React, { PropTypes } from 'react';
import { withRouter } from 'react-router';
import { Link } from 'react-router';

class Register extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      password: '',
      email: ''
    }
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  static propTypes = {
    registerRequest: PropTypes.func.isRequired
  };

  handlePasswordChange(ev) {
    this.setState({password: ev.target.value});
  }

  handleEmailChange(ev) {
    this.setState({email: ev.target.value});
  }

  handleFormSubmit(ev) {
    ev.preventDefault();
    this.props.registerRequest(this.state.email, this.state.password);
  }

  componentWillReceiveProps(nextProps) {
    if(nextProps.isLoggedIn) {
      this.props.router.push('/home');
    }
  }

  render() {
    return (
      <div className='register'>
        <form className='form-register' onSubmit={this.handleFormSubmit}>
          <input type="text"
                 onChange={this.handleEmailChange}
                 placeholder="Email"
                 required
                 autofocus />
          <input type="password"
                 onChange={this.handlePasswordChange}
                 placeholder="Password"
                 required />
          <button type="submit">Register</button>
        </form>
        <div>
          <span>{this.props.errorMessage}</span>
        </div>

        <p>
          Already have an account?
          <Link to="/login">Login</Link>
        </p>
      </div>
    )
  }
}



export default withRouter(Register);
