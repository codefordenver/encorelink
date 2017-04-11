import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import { getFormattedDayAndTime } from '../utils/dateFormatting';

function EventRow({ event }) {
  const { id, date, endDate, name, location } = event;
  const { day, time } = getFormattedDayAndTime(date, endDate);
  return (
    <div className="row event-row">
      <div className="small-12 medium-2 columns">
        {day}
      </div>
      <div className="small-12 medium-3 columns">
        {time}
      </div>
      <div className="small-12 medium-4 columns">
        {name} {location}
      </div>
      <div className="small-12 medium-3 columns">
        <Link to={`/event/${id}`}>details</Link>
        <button className="button success small event-highlight">
          Approved
        </button>
        <button className="button warning small event-highlight">
          Pending
        </button>
      </div>
    </div>
  );
}

EventRow.propTypes = {
  event: PropTypes.shape({
    date: PropTypes.string.isRequired,
    endDate: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    location: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired
  }).isRequired
};

export default EventRow;
