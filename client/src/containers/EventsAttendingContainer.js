import Events from '../components/Events';
import gimmeData from '../utils/gimmeData';
import { getUserId } from '../reducers/userManager';

const getEventsAttendingUrl = (state) => `users/${getUserId(state)}/eventsAttending`;
export default gimmeData(getEventsAttendingUrl)(Events);
