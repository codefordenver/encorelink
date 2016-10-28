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
        <div className="row">
          <div className="small-12 medium-8 columns">
            <h3>Book Performance</h3>
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
