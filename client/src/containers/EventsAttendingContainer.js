import EventsAttending from '../components/EventsAttending';
import gimmeData from '../utils/gimmeData';
import { isMusician, getUserId } from '../reducers/userReducer';

function mapStateToProps(state) {
  return {
    isMusician: isMusician(state)
  };
}

const getEventsAttendingUrl = (state) => {
  return `eventVolunteers?filter=${JSON.stringify({
    where: {
      volunteer: getUserId(state)
    },
    include: 'event'
  })}`;
};

export default gimmeData(getEventsAttendingUrl, mapStateToProps)(EventsAttending);
