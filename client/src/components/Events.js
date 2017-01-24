import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import EventRow from './EventRow';

const approvedFilter = (event) => event && event.status && event.status.approved;
const rejectedFilter = (event) => event && event.status && event.status.rejected;
const pendingFilter = (event) => !approvedFilter(event) && !rejectedFilter(event);

function Events({ data, isMusician, isDashboard }) {
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
          <h3>{ isDashboard ? 'My events' : 'Events' }</h3>
        </div>
        <div className="small-2">
          { isDashboard && (
            <Link to="/events" className="hollow button">
              Find events
            </Link>
          ) }
        </div>
      </div>
      { !isMusician && (
        <Link to="/createEvent">Create Event</Link>
      ) }
      { eventsApproved }
      { eventsPending }
      { eventsRejected }
    </div>
  );
}

Events.propTypes = {
  data: PropTypes.array.isRequired,
  isMusician: PropTypes.bool.isRequired,
  isDashboard: PropTypes.bool
};

Events.defaultProps = {
  data: []
};

export default Events;
