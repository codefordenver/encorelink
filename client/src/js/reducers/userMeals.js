const userMeals = (state = {
  meals: [],
  isFetching: false
}, action) => {
  switch (action.type) {
    case 'REQUEST_USER_MEALS':
      return {
        ...state,
        isFetching: true
      }
    case 'RECEIVE_USER_MEALS':
      return {
        isFetching: false,
        meals: action.payload
      }
    default:
      return state
  }
}

export default userMeals;