import React, { PropTypes } from 'react';
import { withRouter, Link } from 'react-router';
import EventRow from './EventRow';

class EventsAttending extends React.Component {

  static propTypes = {
    loadEventsAttending: PropTypes.func.isRequired,
    events: PropTypes.array.isRequired
  }

  static defaultProps = {
    events: []
  }

  componentWillMount() {
    this.props.loadEventsAttending();
  }

  render() {
    const events = this.props.events.map(event =>
      <EventRow key={event.id} event={event} />
    );
    return (
      <div className="volunteer-view-events">
        <h3>EventsAttending</h3>
        <Link to="/createEvent">Create Event</Link>
        { events }
      </div>
    );
  }
}

export default withRouter(EventsAttending);
