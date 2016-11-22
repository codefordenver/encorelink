import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import EventRow from './EventRow';

function Events({ data, isMusician }) {
  const events = data.map(event =>
    <EventRow key={event.id} event={event} />
  );
  return (
    <div className="volunteer-view-events">
      <h3>Events</h3>
      { !isMusician && (
        <Link to="/createEvent">Create Event</Link>
      ) }
      { events }
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
