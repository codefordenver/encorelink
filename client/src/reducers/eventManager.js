import {
  CREATE_EVENT_REQUEST,
  LOAD_EVENTS_REQUEST,
  LOAD_EVENTS_SUCCESS,
  LOAD_EVENT_SUCCESS
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
    case LOAD_EVENTS_REQUEST:
      return {
        ...state,
        isFetching: true
      };
    case LOAD_EVENTS_SUCCESS:
      return {
        ...state,
        events: action.payload,
        isFetching: false
      };
    case LOAD_EVENT_SUCCESS:
      return {
        ...state,
        event: action.payload,
        isFetching: false
      };
    default:
      return state;
  }
};

export default eventManager;
