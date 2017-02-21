import EventsAttending from '../components/EventsAttending';
import gimmeData from '../utils/gimmeData';
import { getUserId } from '../reducers/userReducer';


const getEventsAttendingUrl = (state) => {
  return `eventVolunteers?filter=${JSON.stringify({
    where: {
      volunteerId: getUserId(state)
    },
    include: 'event'
  })}`;
};

export default gimmeData(getEventsAttendingUrl)(EventsAttending);
