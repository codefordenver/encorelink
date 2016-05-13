import React, { PropTypes } from 'react';

class Login extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      password: '',
      username: ''
    }
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleUsernameChange = this.handleUsernameChange.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  static propTypes = {
    loginRequest: PropTypes.func.isRequired
  }

  handlePasswordChange(ev) {
    this.setState({password: ev.target.value});
  }

  handleUsernameChange(ev) {
    this.setState({username: ev.target.value});
  }

  handleFormSubmit(ev) {
    ev.preventDefault();
    this.props.loginRequest(this.state.username, this.state.password);
  }

  render() {
    return (
      <div className='login'>
        <form className='form-login' onSubmit={this.handleFormSubmit}>
          <input type="text"
                 onChange={this.handleUsernameChange}
                 placeholder="Username"
                 required
                 autofocus />
          <input type="password"
                 onChange={this.handlePasswordChange}
                 placeholder="Password"
                 required />
          <button type="submit">Login</button>
        </form>
      </div>
    )
  }
}



export default Login;