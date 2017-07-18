import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router';
import AddToCalendar from 'react-add-to-calendar';
import { getFormattedDayAndTime } from '../utils/dateFormatting';

const EventVolunteerRow = ({ eventVolunteer, isCurrentlyPending, approveEventMusician, rejectEventMusician }) => {
  const { day, time } = getFormattedDayAndTime(eventVolunteer.event.date, eventVolunteer.event.endDate);
  const { event } = eventVolunteer;

  return (
    <tr>
      <td>
        <a href={`mailto:${eventVolunteer.volunteer.email}`}>
          {eventVolunteer.volunteer.email}
        </a>
        <br />
        <Link to={`/musician/${eventVolunteer.volunteer.id}`}>View Profile</Link>
      </td>
      <td>{day} {time}</td>
      <td>
        <AddToCalendar
          event={{
            title: event.name,
            description: event.notes,
            location: event.location,
            startTime: event.date,
            endTime: event.endDate
          }}
          buttonLabel="add to calendar"
        />
      </td>
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
