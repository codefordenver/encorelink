import React from 'react';
import {Link} from 'react-router';
import {getFormattedDayAndTime} from '../utils/dateFormatting';

const EventVolunteerRow = ({ev, isCurrentlyPending, index, approveEventMusician, rejectEventMusician}) => {
  const {day, time} = getFormattedDayAndTime(ev.event.date, ev.event.endDate);

  return (
    <tr key={index}>
      <td>
        {ev.volunteer.email}
        <br/>
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

export default EventVolunteerRow;
