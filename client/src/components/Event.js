import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import { getFormattedDayAndTime } from '../utils/dateFormatting';

function Event({ data, signUpForEvent, isMusician }) {
  const { date, endDate, name, location } = data || {};
  const { day, time } = getFormattedDayAndTime(date, endDate);
  return (
    <div className="event">
      <h3>{ name }</h3>
      <h4>{ day } | { time }</h4>
      { location }
      { isMusician &&
        <button className="button" onClick={() => signUpForEvent(data)}>
          Sign Up
        </button> }
      <br />
      <br />
      <br />
      <Link to="/events">Back to Events</Link>
    </div>
  );
}

Event.propTypes = {
  data: PropTypes.shape({
    date: PropTypes.string.isRequired,
    endDate: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    location: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired
  }),
  isMusician: PropTypes.bool.isRequired,
  params: PropTypes.shape({
    id: PropTypes.string.isRequired
  }).isRequired,
  signUpForEvent: PropTypes.func.isRequired
};

export default Event;
