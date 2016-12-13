import gimmeData from '../utils/gimmeData';
import { createEvent } from '../actions/eventActions';
import CreateEvent from '../components/CreateEvent';
import { getUserId } from '../reducers/userReducer';

function urlFn(state) {
  return `users/${getUserId(state)}/organization`;
}

const mapDispatchToProps = {
  onSubmit: createEvent
};

export default gimmeData(urlFn, null, mapDispatchToProps)(CreateEvent);
