import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import EventRow from './EventRow';

const approvedFilter = (event = {}) => event.volunteers && event.volunteers[0] && event.volunteers[0].approved;
const rejectedFilter = (event = {}) => event.volunteers && event.volunteers[0] && event.volunteers[0].rejected;
const pendingFilter = (event) => !approvedFilter(event) && !rejectedFilter(event);

function Events({ data, isMusician }) {
  const eventsApproved = data.filter(approvedFilter).map(event =>
    <EventRow key={event.id} event={event} />
  );

  const eventsPending = data.filter(pendingFilter).map(event =>
    <EventRow key={event.id} event={event} />
  );

  const eventsRejected = data.filter(rejectedFilter).map(event =>
    <EventRow key={event.id} event={event} />
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
