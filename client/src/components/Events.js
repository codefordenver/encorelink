import React, { PropTypes } from 'react';
import { withRouter, Link } from 'react-router';
import moment from 'moment';

class EventRow extends React.Component {
  static propTypes = {
    event: PropTypes.shape({
      date: PropTypes.string.isRequired
    }).isRequired
  }

  render() {
    return (
      <div className="row">
        <div className="small-2 columns">
          {moment(this.props.event.date).format('MMM ddd D')}
        </div>
        <div className="small-3 columns">
          {moment(this.props.event.date).format('hh:mm a')}-{moment(this.props.event.endDate).format('hh:mm a')}
        </div>
        <div className="small-6 columns">
          {this.props.event.name} {this.props.event.location}
        </div>
        <div className="small-1 columns">
          <Link to="">details</Link>
        </div>
      </div>
    );
  }
}

class Events extends React.Component {
  static propTypes = {
    loadEvents: PropTypes.func.isRequired,
    events: PropTypes.array.isRequired
  }

  static defaultProps = {
    events: []
  }

  componentWillMount() {
    this.props.loadEvents();
  }

  render() {
    const events = this.props.events.map(event =>
      <EventRow key={event.id} event={event} />
    );
    return (
      <div className="volunteer-view-events">
        <div className="row">
          <div className="small-12 medium-8 columns">
            <h3>Events</h3>
          </div>
          <div className="small-12 medium-4 columns">
            <Link to="/createEvent" className="secondary button">Create Event</Link>
          </div>
        </div>
        <div className="row event-list">
          <div className="small-12 columns">
            <h4>Available Performance Slots</h4>
            { events }
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(Events);
