
import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router';
import EventRow from './EventRow';
import { PENDING, APPROVED } from '../constants/eventAttendingStatus';
import EventVolunteerRow from '../components/EventVolunteerRow';

const OrganizerDashboard = ({ data, approveEventMusician, rejectEventMusician }) => {
  const eventVolunteers = data.reduce((prev, curr) => prev.concat(curr.eventvolunteers), []);
  const awaitingVolunteers = data.filter((event) =>
    !event.eventvolunteers || !event.eventvolunteers.length
  ).map((event) => <EventRow key={event.id} event={event} />);

  const pendingEventVolunteers = eventVolunteers
    .filter(eventVolunteer => eventVolunteer.status === PENDING)
    .map(eventVolunteer => <EventVolunteerRow
      eventVolunteer={eventVolunteer}
      isCurrentlyPending
      key={eventVolunteer.id}
      approveEventMusician={approveEventMusician}
      rejectEventMusician={rejectEventMusician}
    />);

  const approvedEventVolunteers = eventVolunteers
    .filter(eventVolunteer => eventVolunteer.status === APPROVED)
    .map(eventVolunteer => <EventVolunteerRow eventVolunteer={eventVolunteer}
      key={eventVolunteer.id}
    />);

  return (
    <div className="row">
      <div className="small-10">
        <h3>Dashboard</h3>
        <Link to="/createEvent">Create Event</Link>
        <br />
        <div className="card">
          <div className="card-divider">
            <h5>Pending Request</h5>
          </div>
          <div className="card-section">
            <table>
              <tbody>
                {pendingEventVolunteers}
              </tbody>
            </table>
          </div>
        </div>
        <div className="card">
          <div className="card-divider">
            <h5>Upcoming Performances</h5>
          </div>
          <div className="card-section">
            <table>
              <tbody>
                {approvedEventVolunteers}
              </tbody>
            </table>
          </div>
        </div>
        <div>
          <h5>Waiting for volunteers</h5>
          {awaitingVolunteers}
        </div>
      </div>
    </div>
  );
};

OrganizerDashboard.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    eventVolunteers: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number.isRequired,
      status: PropTypes.string.isRequired
    }))
  })).isRequired,
  approveEventMusician: PropTypes.func.isRequired,
  rejectEventMusician: PropTypes.func.isRequired
};

OrganizerDashboard.defaultProps = {
  data: []
};


export default OrganizerDashboard;
