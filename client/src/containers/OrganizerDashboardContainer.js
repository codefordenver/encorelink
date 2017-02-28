import OrganizerDashboard from '../components/OrganizerDashboard';
import gimmeData from '../utils/gimmeData';

const getEventsAttendingUrl = (state) => {
  return `eventVolunteers?filter=${JSON.stringify({
    include: ['event', 'volunteer']
  })}`;
};

export default gimmeData(getEventsAttendingUrl)(OrganizerDashboard);
