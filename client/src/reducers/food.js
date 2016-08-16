const food = (state = {
  foodData: [],
  isFetching: false
}, action) => {
  switch (action.type) {
    case 'REQUEST_FOOD':
      return {
        ...state,
        isFetching: true
      };
    case 'RECEIVE_FOOD':
      return {
        ...state,
        foodData: action.food,
        isFetching: false
      };
    default:
      return state;
  }
};

export default food;
