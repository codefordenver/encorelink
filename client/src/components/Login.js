import React, { PropTypes } from 'react';
import { withRouter, Link } from 'react-router';
import { compose } from 'redux';
import { Field, reduxForm } from 'redux-form';

class Login extends React.Component {
  static propTypes = {
    errorMessage: PropTypes.string,
    handleSubmit: PropTypes.func.isRequired,
    router: PropTypes.shape({
      push: PropTypes.func.isRequired
    }).isRequired
  };

  componentWillReceiveProps(nextProps) {
    if (nextProps.isLoggedIn) {
      this.props.router.push('/events');
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
            <span>{this.props.errorMessage}</span>
            <Link to="/">Go back to Landing</Link>
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
