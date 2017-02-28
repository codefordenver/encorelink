import {getUserId} from '../reducers/userReducer';
import OrganizerDashboard from '../components/OrganizerDashboard';
import gimmeData from '../utils/gimmeData';
import { approveEventMusician, rejectEventMusician } from '../actions/eventActions';

const getEventsAttendingUrl = (state) => {
  return `events?filter=${JSON.stringify({
    include: {
      relation: 'eventvolunteers',
      include: 'volunteer'
    },
    where: {
      ownerId: getUserId(state)
    },
  })}`;
};

const mapStateToProps = (state) => {
  return {
    userId: getUserId(state)
  };
};

const mapDispatchToProps = {
  approveEventMusician,
  rejectEventMusician
};

export default gimmeData(getEventsAttendingUrl, mapStateToProps, mapDispatchToProps)(OrganizerDashboard);
