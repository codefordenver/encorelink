import Events from '../components/Events';
import { isMusician, getUserId } from '../reducers/userReducer';
import gimmeData from '../utils/gimmeData';

function urlFn(state) {
  if (isMusician(state)) {
    return 'events';
  }

  return `users/${getUserId(state)}/events`;
}

export default gimmeData(urlFn)(Events);
