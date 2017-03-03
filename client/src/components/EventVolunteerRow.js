import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import { getFormattedDayAndTime } from '../utils/dateFormatting';

const EventVolunteerRow = ({ ev, isCurrentlyPending, index, approveEventMusician, rejectEventMusician }) => {
  const { day, time } = getFormattedDayAndTime(ev.event.date, ev.event.endDate);

  return (
    <tr key={index}>
      <td>
        {ev.volunteer.email}
        <br />
        <Link to={`/musician/${ev.volunteer.id}`}>View Profile</Link>
      </td>
      <td>{day} {time}</td>
      {isCurrentlyPending &&
      <td>
        <div className="button-group">
          <a
            className="button secondary"
            href={`mailto:${ev.volunteer.email}`}
          >Contact
          </a>
          <button
            className="button success"
            onClick={() => approveEventMusician(ev)}
          >Approve
          </button>
          <button
            className="button alert"
            onClick={() => rejectEventMusician(ev)}
          >Pass
          </button>
        </div>
      </td>}
    </tr>
  );
};

EventVolunteerRow.propTypes = {
  ev: PropTypes.shape({
    event: PropTypes.shape({
      date: PropTypes.string.isRequired,
      endDate: PropTypes.string.isRequired,
    }),
    volunteer: PropTypes.shape({
      email: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired
    })
  }),
  approveEventMusician: PropTypes.func.isRequired,
  rejectEventMusician: PropTypes.func.isRequired,
  index: PropTypes.number.isRequired,
  isCurrentlyPending: PropTypes.bool.isRequired
};

export default EventVolunteerRow;
