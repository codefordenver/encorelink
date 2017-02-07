import EventsAttending from '../components/EventsAttending';
import gimmeData from '../utils/gimmeData';
import { isMusician, getUserId } from '../reducers/userReducer';

function mapStateToProps(state) {
  return {
    isMusician: isMusician(state)
  };
}

const getEventsAttendingUrl = (state) => `
  users/${getUserId(state)}/eventsAttending?filter=${JSON.stringify({
    include: 'volunteers'
  })}
`;

export default gimmeData(getEventsAttendingUrl, mapStateToProps)(EventsAttending);
