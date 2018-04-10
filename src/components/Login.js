import PropTypes from 'prop-types';
import React from 'react';
import { withRouter, Link } from 'react-router';
import { compose } from 'redux';
import { Field, reduxForm } from 'redux-form';

class Login extends React.Component {
  static propTypes = {
    handleSubmit: PropTypes.func.isRequired,
    router: PropTypes.shape({
      push: PropTypes.func.isRequired
    }).isRequired,
    location: PropTypes.shape({
      state: PropTypes.shape({
        nextPathname: PropTypes.string
      })
    }).isRequired,
    isLoggedIn: PropTypes.bool.isRequired
  };

  componentWillReceiveProps(nextProps) {
    if (nextProps.isLoggedIn) {
      const locationState = nextProps.location.state;

      if (locationState && locationState.nextPathname) {
        this.props.router.push(locationState.nextPathname);
      } else {
        this.props.router.push('/dashboard');
      }
    }
  }

  render() {
    return (
      <div className="login row">
        <div className="column small-12 medium-6 medium-offset-3 large-4 large-offset-4">
          <form className="form-login" onSubmit={this.props.handleSubmit}>
            <Field
              name="email"
              component="input"
              type="text"
              placeholder="Email"
              required
              autoFocus
            />
            <Field
              name="password"
              component="input"
              type="password"
              placeholder="Password"
              required
            />
            <button className="button secondary" type="submit">Log in</button>
          </form>
          <div>
            <Link to="/">Back to Homepage</Link>
          </div>
          <div>
            <Link to="/forgotPassword">Forgot Password?</Link>
          </div>
        </div>
      </div>
    );
  }
}

export default compose(
  withRouter,
  reduxForm({
    form: 'loginForm'
  })
)(Login);
