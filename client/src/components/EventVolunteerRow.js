import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import { getFormattedDayAndTime } from '../utils/dateFormatting';

const EventVolunteerRow = ({ eventVolunteer, isCurrentlyPending, approveEventMusician, rejectEventMusician }) => {
  const { day, time } = getFormattedDayAndTime(eventVolunteer.event.date, eventVolunteer.event.endDate);

  return (
    <tr>
      <td>
        {eventVolunteer.volunteer.email}
        <br />
        <Link to={`/musician/${eventVolunteer.volunteer.id}`}>View Profile</Link>
      </td>
      <td>{day} {time}</td>
      {isCurrentlyPending &&
      <td>
        <div className="button-group">
          <a
            className="button secondary"
            href={`mailto:${eventVolunteer.volunteer.email}`}
          >Contact
          </a>
          <button
            className="button success"
            onClick={() => approveEventMusician(eventVolunteer)}
          >Approve
          </button>
          <button
            className="button alert"
            onClick={() => rejectEventMusician(eventVolunteer)}
          >Pass
          </button>
        </div>
      </td>}
    </tr>
  );
};

EventVolunteerRow.propTypes = {
  eventVolunteer: PropTypes.shape({
    event: PropTypes.shape({
      date: PropTypes.string.isRequired,
      endDate: PropTypes.string.isRequired,
    }),
    volunteer: PropTypes.shape({
      email: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired
    })
  }),
  approveEventMusician: PropTypes.func.isRequired,
  rejectEventMusician: PropTypes.func.isRequired,
  isCurrentlyPending: PropTypes.bool.isRequired
};

export default EventVolunteerRow;
