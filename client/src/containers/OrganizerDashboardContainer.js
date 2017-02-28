import OrganizerDashboard from '../components/OrganizerDashboard';
import gimmeData from '../utils/gimmeData';

const getEventsAttendingUrl = (state) => {
  return `eventVolunteers?filter=${JSON.stringify({
    include: 'event'
  })}`;
};

export default gimmeData(getEventsAttendingUrl)(OrganizerDashboard);
