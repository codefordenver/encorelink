const eventManager = (state = {
  isFetching: false
}, action) => {
  switch (action.type) {
    case 'CREATE_EVENT_REQUEST':
      return {
        ...state,
        isFetching: true
      };
    case 'GET_VOLUNTEER_EVENTS_REQUEST':
      return {
        ...state,
        isFetching: true
      };
    case 'GET_VOLUNTEER_EVENTS_SUCCESS':
      return {
        ...state,
        events: action.payload,
        isFetching: false
      };
    default:
      return state;
  }
};

export default eventManager;
