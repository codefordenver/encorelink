import React, { PropTypes } from 'react';
import { withRouter } from 'react-router';

class VolunteerViewEvents extends React.Component {

  static propTypes = {
    volunteerViewEvents: PropTypes.func.isRequired,
    events: PropTypes.array.isRequired
  }

  static defaultProps = {
    events: []
  }

  componentWillMount() {
    this.props.volunteerViewEvents();
  }

  render() {
    const events = this.props.events.map(event =>
      <div key={event.id}>{ event.name }, { event.date }</div>
    );
    return (
      <div className="volunteer-view-events">
        <h3>Events</h3>
        { events }
      </div>
    );
  }
}

export default withRouter(VolunteerViewEvents);
