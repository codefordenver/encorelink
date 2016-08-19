import { connect } from 'react-redux';

import UserMealsList from '../components/UserMealsList';
import { fetchUserMeals } from '../actions';

const mapStateToProps = (state) => {
  return {
    meals: state.userMeals.meals,
    isFetching: state.userMeals.isFetching,
    userId: state.userManager.userId,
    userToken: state.userManager.userToken
  };
};

const mapDispatchToProps = {
  fetchUserMeals
};

export default connect(mapStateToProps, mapDispatchToProps)(UserMealsList);
