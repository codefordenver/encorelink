import React from 'react';
import { Link, withRouter } from 'react-router';
import Modal from 'react-modal';
import PropTypes from 'prop-types';
import Terms from './Terms';

class Register extends React.Component {
  static propTypes = {
    registerRequest: PropTypes.func.isRequired,
    router: PropTypes.shape({
      push: PropTypes.func.isRequired
    }).isRequired,
    isMusician: PropTypes.bool.isRequired,
    isLoggedIn: PropTypes.bool.isRequired
  };

  constructor(props) {
    super(props);
    this.state = {
      password: '',
      email: '',
      open: false,
      isMusician: true,
      tab: 'musician',
      agreeTerms: false,
    };
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handleVolunteerChange = this.handleVolunteerChange.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleCheckbox = this.handleCheckbox.bind(this);
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

  handleCheckbox(event) {
    this.setState({ agreeTerms: !this.state.agreeTerms });
  }

  handleFormSubmit(ev) {
    ev.preventDefault();
    const { email, password, isMusician, agreeTerms } = this.state;

    this.props.registerRequest(email, password, isMusician, agreeTerms);
  }

  handleOpen = () => { this.setState({ open: true }); }

  handleClose = () => { this.setState({ open: false }); }

  switchTabs = (tab) => { return () => { this.setState({ tab, isMusician: tab === 'musician' }); }; }

  registerForm = (type) => (
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
      <label className="volunteer-check">
        <input type="checkbox"
          checked={type === 'musician'}
          onChange={this.handleVolunteerChange}
        />
      </label>
      <label className="terms"> I have read and agree to the
        {' '}
        <Link onKeyPress={(e) => {
          if (e.charCode === 13) { this.handleOpen(); }
        }}
          onClick={this.handleOpen}
          tabIndex={0}
        >
          terms
        </Link>
        .
        <input
          type="checkbox"
          onChange={this.handleCheckbox}
          checked={this.state.agreeTerms}
        />
        <Modal
          isOpen={this.state.open}
          onRequestClose={this.handleClose}
          contentLabel="Terms Modal"
        >
          <Terms />
          <button className="button secondary right" onClick={this.handleClose}>Close</button>
        </Modal>
      </label>
      <button
        className="button secondary"
        type="submit"
        disabled={this.state.agreeTerms === false}
      >
        Register
      </button>
    </form>
  )

  render() {
    return (
      <div className="register">
        <ul className="tabs">
          <li className={`tabs-title ${this.state.tab === 'musician' ? 'is-active' : 'not-active'}`}>
            <Link onClick={this.switchTabs('musician')}>
              Sign up as a Musician
            </Link>
          </li>
          <li className={`tabs-title ${this.state.tab === 'organizer' ? 'is-active' : 'not-active'}`}>
            <Link onClick={this.switchTabs('organizer')}>
              Sign up as an Organizer
            </Link>
          </li>
        </ul>

        <div className="tabs-content">
          <div className={`tabs-panel ${this.state.tab === 'musician' ? 'is-active' : 'not-active'}`}>
            {this.registerForm('musician')}
          </div>
          <div className={`tabs-panel ${this.state.tab === 'organizer' ? 'is-active' : 'not-active'}`}>
            {this.registerForm('organizer')}
          </div>
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
