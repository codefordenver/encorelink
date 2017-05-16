import { withRouter } from 'react-router';
import { isMusician, isRegistered, getUserId } from '../reducers/userReducer';
import { isUrlDataFetching } from '../reducers/modelsReducer';
import { signUpForEvent, cancelSignUpForEvent, deleteEvent } from '../actions/eventActions';
import gimmeData from '../utils/gimmeData';
import Event from '../components/Event';

function urlFn(state, props) {
  const eventId = props.params.id;
  return `events/${eventId}?filter=${JSON.stringify({
    include: ['volunteers', 'owner']
  })}`;
}

function mapStateToProps(state, ownProps) {
  return {
    isMusician: isMusician(state),
    isFetching: isUrlDataFetching(state, urlFn(state, ownProps)),
    isRegistered: isRegistered(state, urlFn(state, ownProps)),
    userId: getUserId(state)
  };
}

const mapDispatchToProps = {
  signUpForEvent,
  cancelSignUpForEvent,
  deleteEvent
};

export default withRouter(gimmeData(urlFn, mapStateToProps, mapDispatchToProps)(Event));
