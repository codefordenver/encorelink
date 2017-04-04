import React, {PropTypes} from 'react';
import {Link, withRouter} from 'react-router';
import Modal from 'react-modal';
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
      isMusician: false,
      tab: "Musician"
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
    this.setState({password: ev.target.value});
  }

  handleEmailChange(ev) {
    this.setState({email: ev.target.value});
  }

  handleVolunteerChange(ev) {
    this.setState({isMusician: ev.target.checked});
  }

  handleFormSubmit(ev) {
    ev.preventDefault();
    this.props.registerRequest(this.state.email, this.state.password, this.state.isMusician);
  }

  handleOpen = () => {
    this.setState({open: true});
  }

  handleClose = () => {
    this.setState({open: false});
  }

  isActive = () => {
    this.setState({active: true});
  }

  handleMusicianTabClick = () => {
    this.setState({tab: "Musician"});
  }
  handleOrganizerTabClick = () => {
    this.setState({tab: "Organizer"});
  }

  render() {
    return (
      <div className="register">
        <h3>Sign up</h3>
        <form className="form-register" onSubmit={this.handleFormSubmit}>

          <ul className="tabs" data-tabs id="register-tabs">
            <li className={'tabs-title ' + (this.state.tab === "Musician" ? "is-active" : "")}>
              <Link onKeyPress={(e) => {
                if (e.charCode === 13) {
                  this.handleMusicianTabClick();
                }
              }}
                    onClick={this.handleMusicianTabClick}
                    tabIndex={0}
              >As a Musician</Link>
            </li>
            <li className={'tabs-title ' + (this.state.tab === "Organizer" ? "is-active" : "")}>
              <Link onKeyPress={(e) => {
                if (e.charCode === 13) {
                  this.handleOrganizerTabClick();
                }
              }}
                    onClick={this.handleOrganizerTabClick}
                    tabIndex={0}
              >As an Organizer</Link>
            </li>
          </ul>

          <div className="tabs-content" data-tabs-content="register-tabs">
            <div className={'tabs-panel ' + (this.state.tab === "Musician" ? "is-active" : "")} id="panel1">
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
            </div>
          </div>
          <div className="tabs-content" data-tabs-content="register-tabs">
            <div className={'tabs-panel ' + (this.state.tab === "Organizer" ? "is-active" : "")} id="panel2">
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
            </div>
          </div>

          <label className="terms">By clicking Register, you agree to the site
            {' '}
            <Link onKeyPress={(e) => {
              if (e.charCode === 13) {
                this.handleOpen();
              }
            }}
                  onClick={this.handleOpen}
                  tabIndex={0}
            >
              terms
            </Link>
            .
            <Modal
              isOpen={this.state.open}
              onRequestClose={this.handleClose}
              contentLabel="Terms Modal"
            >
              <Terms />
              <button className="button secondary right" onClick={this.handleClose}>Close</button>
            </Modal>
          </label>
          <button className="button secondary" type="submit">Register</button>
        </form>
        <p>
          Already have an account?&nbsp;
          <Link to="/login">Log in</Link>
        </p>
      </div>
    );
  }
}


export default withRouter(Register);
