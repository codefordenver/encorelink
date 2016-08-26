const eventManager = (state = {
  isFetching: false
}, action) => {
  switch (action.type) {
    case 'CREATE_EVENT_REQUEST':
      return {
        ...state,
        isFetching: true
      };
    default:
      return state;
  }
};

export default eventManager;
