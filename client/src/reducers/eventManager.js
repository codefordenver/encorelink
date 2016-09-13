import {
  CREATE_EVENT_REQUEST,
  GET_VOLUNTEER_EVENTS_REQUEST,
  GET_VOLUNTEER_EVENTS_SUCCESS,
  LOGOUT
} from '../constants/reduxConstants';

const initialState = {
  isFetching: false
};

const eventManager = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_EVENT_REQUEST:
      return {
        ...state,
        isFetching: true
      };
    case GET_VOLUNTEER_EVENTS_REQUEST:
      return {
        ...state,
        isFetching: true
      };
    case GET_VOLUNTEER_EVENTS_SUCCESS:
      return {
        ...state,
        events: action.payload,
        isFetching: false
      };
    case LOGOUT:
      return initialState;
    default:
      return state;
  }
};

export default eventManager;
