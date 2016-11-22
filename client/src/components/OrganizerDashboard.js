import React, { PropTypes } from 'react';
import { withRouter } from 'react-router';
import { Link } from 'react-router';

class OrganizerDashboard extends React.Component {

  // componentWillMount() {
  //   this.props.organizerDashboard();
  // }

  render() {
    return (
      <div>
        <div>
          <div>DASHBOARD</div>
          <div>CHAT INBOX</div>
          <div>CALENDAR</div>
          <div>PROFILE</div>
        </div>
        <div>
          <h1>This is the Dashboard page</h1>
        </div>
        <Link to="/createEvent">
          Create Event
        </Link> | <Link to="/volunteerViewEvents">
          View Events
        </Link>
      </div>
    );
  }
}

export default withRouter(OrganizerDashboard);
