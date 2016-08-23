const eventManager = (state = {
  isFetching: false,
  user: {},
  userId: null,
  userToken: null,
  isLoggedIn: false,
  isError: false,
  errorMessage: ''
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
