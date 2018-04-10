import Events from '../components/DetailedEventsList';
import { isMusician, getUserId } from '../reducers/userReducer';
import gimmeData from '../utils/gimmeData';

function urlFn(state) {
  if (isMusician(state)) {
    return 'events';
  }

  return `users/${getUserId(state)}/events`;
}

function mapStateToProps(state) {
  return {
    isMusician: isMusician(state)
  };
}

export default gimmeData(urlFn, mapStateToProps)(Events);
