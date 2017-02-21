import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import EventRow from './EventRow';

// const approvedFilter = (volunteer = {}) => volunteer.status === 'APPROVED';
// const rejectedFilter = (volunteer = {}) => volunteer.status === 'REJECTED';
// const pendingFilter = (volunteer = {}) => volunteer.status === 'PENDING';

const filter = (status) => (volunteer) => volunteer.status === status;

function Events({ data, isMusician }) {
  const eventsApproved = data.filter(filter('APPROVED')).map(volunteer =>
    <EventRow key={volunteer.event.id} event={volunteer.event} />
  );

  const eventsPending = data.filter(filter('PENDING')).map(volunteer =>
    <EventRow key={volunteer.event.id} event={volunteer.event} />
  );

  const eventsRejected = data.filter(filter('REJECTED')).map(volunteer =>
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
      { !isMusician && (
        <Link to="/createEvent">Create Event</Link>
      ) }

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
  data: PropTypes.array.isRequired,
  isMusician: PropTypes.bool.isRequired
};

Events.defaultProps = {
  data: []
};

export default Events;
