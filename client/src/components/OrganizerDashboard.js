import React from 'react';
import {Link} from 'react-router';
import {PENDING, CANCELLED, REJECTED, APPROVED} from '../constants/eventAttendingStatus';
import { getFormattedDayAndTime } from '../utils/dateFormatting';

const OrganizerDashboard = ({data, userId, approveEventMusician, rejectEventMusician}) => {
  return (
    <div className="row">
      <div className="small-10">
        <h3>Dashboard</h3>
        <br/>
        <div className="card">
          <div className="card-divider">
            <h5>Pending Request</h5>
          </div>
          <div className="card-section">
            <table>
              {data && data.length > 0 &&
              <tbody>
              {data
                .filter((v) => {
                  return v.event.ownerId === userId;
                })
                .filter((v) => v.status !== APPROVED && v.status !== REJECTED)
                .map((ev, index) => {
                  const { day, time } = getFormattedDayAndTime(ev.event.date, ev.event.endDate);
                  return (
                    <tr key={index}>
                      <td>
                        {ev.volunteer.email}
                        <br/>
                        <Link to={`/musician/${ev.volunteer.id}`}>View Profile</Link>
                      </td>
                      <td>{day} {time}</td>
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
                      </td>
                    </tr>
                  );
                })}
              </tbody>}
            </table>
          </div>
        </div>
        <div className="card">
          <div className="card-divider">
            <h5>Upcoming Performances</h5>
          </div>
          <div className="card-section">
            <table>
              {data && data.length > 0 &&
              <tbody>
              {data
                .filter((v) => {
                  return v.event.ownerId === userId;
                })
                .filter((v) => v.status === APPROVED)
                .map((ev, index) => {
                  const { day, time } = getFormattedDayAndTime(ev.event.date, ev.event.endDate);
                  return (
                    <tr key={index}>
                      <td>
                        {ev.volunteer.email}
                        <br/>
                        <Link to={`/musician/${ev.volunteer.id}`}>View Profile</Link>
                      </td>
                      <td>{day} {time}</td>
                    </tr>
                  );
                })}
              </tbody>}
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrganizerDashboard;
