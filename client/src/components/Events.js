import React, { PropTypes } from 'react';
import { withRouter, Link } from 'react-router';
import EventRow from './EventRow';

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
        <h3>Events</h3>
        <Link to="/createEvent">Create Event</Link>
        { events }
      </div>
    );
  }
}

export default withRouter(Events);
