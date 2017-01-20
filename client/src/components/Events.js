import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import EventRow from './EventRow';

function Events({ data, isMusician, isDashboard }) {
  const events = data.map(event =>
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
      { events }
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
