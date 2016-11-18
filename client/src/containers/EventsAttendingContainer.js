import Events from '../components/Events';
import gimmeData from '../utils/gimmeData';
import { getUserId } from '../reducers/userReducer';

const getEventsAttendingUrl = (state) => `users/${getUserId(state)}/eventsAttending`;
export default gimmeData(getEventsAttendingUrl)(Events);
