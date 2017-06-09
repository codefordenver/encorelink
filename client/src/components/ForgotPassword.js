import PropTypes from 'prop-types';
import React from 'react';
import { withRouter, Link } from 'react-router';
import { compose } from 'redux';
import { Field, reduxForm } from 'redux-form';

class ForgotPassword extends React.Component {
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
    isLoggedIn: PropTypes.bool.isRequired,
  };

  constructor(props) {
    super(props);
    this.state = {
      resetEmailSent: false
    };
    this.handleSendEmail = this.handleSendEmail.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.isLoggedIn) {
      const locationState = nextProps.location.state;

      if (locationState && locationState.nextPathname) {
        this.props.router.push(locationState.nextPathname);
      } else {
        this.props.router.push('/events');
      }
    }
  }

  handleSendEmail(event) {
    event.preventDefault();
    this.setState({
      resetEmailSent: true
    });
    this.props.handleSubmit();
  }

  renderMessage() {
    if (this.state.resetEmailSent) {
      return (
        <h2>Email sent.</h2>
      );
    }

    return (
      <form className="form-login" onSubmit={this.handleSendEmail}>
        <Field
          name="email"
          component="input"
          type="text"
          placeholder="Enter your email"
          required
          autoFocus
        />
        <button className="button secondary" type="submit">Reset Password</button>
      </form>
    );
  }

  render() {
    return (
      <div className="login row">
        <div className="column small-12 medium-6 medium-offset-3 large-4 large-offset-4">
          {this.renderMessage()}
          <div>
            <Link to="/">Back to Homepage</Link>
          </div>
        </div>
      </div>
    );
  }
}

export default compose(
  withRouter,
  reduxForm({
    form: 'forgotPasswordForm'
  })
)(ForgotPassword);
