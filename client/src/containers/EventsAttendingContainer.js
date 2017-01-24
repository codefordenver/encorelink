import Events from '../components/Events';
import gimmeData from '../utils/gimmeData';
import { isMusician, getUserId } from '../reducers/userReducer';

function mapStateToProps(state) {
  return {
    isMusician: isMusician(state),
    isDashboard: true
  };
}

const getEventsAttendingUrl = (state) => `users/${getUserId(state)}/eventsAttending`;
export default gimmeData(getEventsAttendingUrl, mapStateToProps)(Events);
