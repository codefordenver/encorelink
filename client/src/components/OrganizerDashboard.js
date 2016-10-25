import React, { PropTypes } from 'react';
import { withRouter } from 'react-router';

class OrganizerDashboard extends React.Component {

  // componentWillMount() {
  //   this.props.organizerDashboard();
  // }

  render() {
    return (
      <div>
        <h1>This is the Dashboard page</h1>
      </div>
    );
  }
}

export default withRouter(OrganizerDashboard);
