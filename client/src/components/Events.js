import React, { PropTypes } from 'react';
import { withRouter, Link } from 'react-router';

class Events extends React.Component {

  static propTypes = {
    loadEvents: PropTypes.func.isRequired,
    events: PropTypes.array.isRequired,
    isLoggedIn: PropTypes.bool.isRequired
  }

  static defaultProps = {
    events: []
  }

  componentWillMount() {
    this.props.loadEvents();
  }

  render() {
    const events = this.props.events.map(event =>
      <div key={event.id}>{ event.name }, { event.date }, { event.endDate }, { event.location }, { event.notes }</div>
    );
    const isLoggedIn = (
      <Link to="/createEvent">Create Event</Link>
    );
    return (
      <div className="volunteer-view-events">
        <h3>Events</h3>
        { this.props.isLoggedIn ? isLoggedIn : null }
        { events }
      </div>
    );
  }
}

export default withRouter(Events);
