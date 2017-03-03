import React from 'react';
import {PENDING, CANCELLED, REJECTED, APPROVED} from '../constants/eventAttendingStatus';
import EventVolunteerRow from '../components/EventVolunteerRow';

const OrganizerDashboard = ({data, approveEventMusician, rejectEventMusician}) => {
  let pendingEventVolunteers = [];
  let approvedEventVolunteers = [];

  if (data && data.length > 0) {
    pendingEventVolunteers = data
      .filter((v) => v.status !== APPROVED && v.status !== REJECTED)
      .map(v => <EventVolunteerRow ev={v}
                                   isCurrentlyPending={true}
                                   key={v.id}
                                   approveEventMusiscian={approveEventMusician}
                                   rejectEventMusician={rejectEventMusician}/>);
    approvedEventVolunteers = data
      .filter((v) => v.status === APPROVED)
      .map(v => <EventVolunteerRow ev={v}
                                   isCurrentlyPending={false}
                                   key={v.id}/>)
  }
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
              <tbody>
              {pendingEventVolunteers}
              </tbody>
            </table>
          </div>
        </div>
        <div className="card">
          <div className="card-divider">
            <h5>Upcoming Performances</h5>
          </div>
          <div className="card-section">
            <table>
              <tbody>
              {approvedEventVolunteers}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrganizerDashboard;
