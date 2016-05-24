const userManager = (state = {
  isFetching: false,
  user: {},
  userId: null,
  userToken: null
}, action) => {
  switch (action.type) {
    case 'REQUEST_USER':
      return {
        ...state,
        userid: action.userid,
        isFetching: true
      }
    case 'RECEIVE_USER':
      return {
        ...state,
        user: action.user,
        isFetching: false
      }
    case 'LOGIN_SUCCESS':
      return {
        ...state,
        userId: action.payload.userId,
        userToken: action.payload.id
      }
    default:
      return state
  }
}

export default userManager;