import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import { APPROVED, PENDING, REJECTED } from '../constants/eventAttendingStatus';
import EventRow from './EventRow';

const approvedFilter = (volunteer = {}) => volunteer.status === APPROVED;
const rejectedFilter = (volunteer = {}) => volunteer.status === REJECTED;
const pendingFilter = (volunteer = {}) => volunteer.status === PENDING;

function Events({ data }) {
  const eventsApproved = data.filter(approvedFilter).map(volunteer =>
    <EventRow key={volunteer.event.id} event={volunteer.event} />
  );

  const eventsPending = data.filter(pendingFilter).map(volunteer =>
    <EventRow key={volunteer.event.id} event={volunteer.event} />
  );

  const eventsRejected = data.filter(rejectedFilter).map(volunteer =>
    <EventRow key={volunteer.event.id} event={volunteer.event} />
  );

  return (
    <div className="volunteer-view-events">
      <div className="row">
        <div className="small-10">
          <h3>My events</h3>
        </div>
        <div className="small-2">
          <Link to="/events" className="hollow button">
            Find events
          </Link>
        </div>
      </div>

      <h4> Approved </h4>
      { eventsApproved }

      <h4> Pending </h4>
      { eventsPending }

      <h4> Rejected </h4>
      { eventsRejected }
    </div>
  );
}

Events.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    status: PropTypes.string.isRequired,
    event: PropTypes.shape({
      id: PropTypes.number.isRequired
    })
  })).isRequired
};

Events.defaultProps = {
  data: []
};

export default Events;
