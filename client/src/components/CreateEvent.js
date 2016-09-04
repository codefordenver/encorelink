import React, { PropTypes } from 'react';
import { withRouter } from 'react-router';

class CreateEvent extends React.Component {
  static propTypes = {
    createEvent: PropTypes.func.isRequired,
    errorMessage: PropTypes.string
  };

  constructor(props) {
    super(props);
    this.state = {
      name: '',
      date: ''
    };
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleDateChange = this.handleDateChange.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  handleNameChange(ev) {
    this.setState({ name: ev.target.value });
  }

  handleDateChange(ev) {
    this.setState({ date: ev.target.value });
  }

  handleFormSubmit(ev) {
    ev.preventDefault();
    this.props.createEvent(this.state.name, this.state.date);
  }

  render() {
    return (
      <div className="create-event">
        <form className="form-create-event" onSubmit={this.handleFormSubmit}>
          <input type="text"
            onChange={this.handleNameChange}
            placeholder="name"
            required
            autoFocus
          />
          <input type="date"
            onChange={this.handleDateChange}
            placeholder="date"
            required
          />
          <button type="submit">Create Event</button>
        </form>
        <div>
          <span>{this.props.errorMessage}</span>
        </div>
      </div>
    );
  }
}


export default withRouter(CreateEvent);
