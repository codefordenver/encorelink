const userManager = (state = {
  isFetching: false,
  user: {},
  userId: null,
  userToken: null,
  isLoggedIn: false,
  isError: false,
  errorMessage: ''
}, action) => {
  switch (action.type) {
    case 'LOGIN_REQUEST':
      return {
        ...state,
        isFetching: true
      }
    case 'LOGIN_SUCCESS':
      return {
        ...state,
        userId: action.payload.userId,
        userToken: action.payload.id,
        isLoggedIn: true,
        isFetching: false,
        isError: false,
        errorMessage: '',
      }
    case 'LOGIN_FAILURE':
      return {
        ...state,
        isFetching: false,
        isError: true,
        errorMessage: action.payload.message
      }
    default:
      return state
  }
}

export default userManager;
