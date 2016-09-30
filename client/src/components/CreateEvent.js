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
      date: '',
      notes: '',
      location: '',
      endDate: ''
    };
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleDateChange = this.handleDateChange.bind(this);
    this.handleNotesChange = this.handleNotesChange.bind(this);
    this.handleLocationChange = this.handleLocationChange.bind(this);
    this.handleEndDateChange = this.handleEndDateChange.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  handleNameChange(ev) {
    this.setState({ name: ev.target.value });
  }

  handleDateChange(ev) {
    this.setState({ date: ev.target.value });
  }

  handleNotesChange(ev) {
    this.setState({ notes: ev.target.value });
  }

  handleLocationChange(ev) {
    this.setState({ location: ev.target.value });
  }

  handleEndDateChange(ev) {
    this.setState({ endDate: ev.target.value });
  }
  handleFormSubmit(ev) {
    ev.preventDefault();
    this.props.createEvent(this.state.name, this.state.date, this.state.notes, this.state.location, this.state.endDate);
  }

  render() {
    return (
      <div className="row">
        <div className="small-12 columns">
          <h1>Schedule Performance</h1>
          <h4 className="subheader">Fill form below to set up a performance time slot</h4>
          <form className="form-create-event" onSubmit={this.handleFormSubmit}>
            <div className="row">
              <div className="small-3 medium-2 columns">
                <label>Name</label>
              </div>
              <div className="small-9 medium-10 columns">
                <input type="text"
                  onChange={this.handleNameChange}
                  placeholder="name"
                  required
                />
              </div>
            </div>
            <div className="row">
              <div className="small-3 medium-2 columns">
                <label>Start Date/Time</label>
              </div>
              <div className="small-9 medium-10 columns">
                <input type="datetime-local"
                  onChange={this.handleDateChange}
                  placeholder="date"
                  required
                />
              </div>
            </div>
            <div className="row">
              <div className="small-3 medium-2 columns">
                <label>End Date/Time</label>
              </div>
              <div className="small-9 medium-10 columns">
                <input type="datetime-local"
                  onChange={this.handleEndDateChange}
                  placeholder="date"
                  required
                />
              </div>
            </div>
            <div className="row">
              <div className="small-3 medium-2 columns">
                <label>Location</label>
              </div>
              <div className="small-9 medium-10 columns">
                <input type="text"
                  onChange={this.handleLocationChange}
                  placeholder="Location"
                  required
                  autoFocus
                />
              </div>
            </div><div className="row">
              <div className="small-3 medium-2 columns">
                <label>Notes</label>
              </div>
              <div className="small-9 medium-10 columns">
                <textarea placeholder="Notes" onChange={this.handleNotesChange} />
              </div>
            </div>
            <div className="row">
              <div className="small-3 medium-2 columns" />
              <div className="small-9 medium-10 columns">
                <input className="button" type="submit" value="Schedule" />
              </div>
            </div>
          </form>
          <div>
            <span>{this.props.errorMessage}</span>
          </div>
        </div>
      </div>
    );
  }
}


export default withRouter(CreateEvent);
