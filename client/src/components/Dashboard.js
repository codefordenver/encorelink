import PropTypes from 'prop-types';
import React from 'react';
import OrganizerDashboardContainer from '../containers/OrganizerDashboardContainer';
import EventsAttendingContainer from '../containers/EventsAttendingContainer';

const Dashboard = ({ isMusician }) => {
  if (isMusician) {
    return <EventsAttendingContainer />;
  }

  return <OrganizerDashboardContainer />;
};

Dashboard.propTypes = {
  isMusician: PropTypes.bool.isRequired
};

export default Dashboard;
