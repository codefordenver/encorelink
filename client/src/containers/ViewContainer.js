import { connect } from 'react-redux';
import _ from 'lodash';

import { changeView } from '../actions';
import View from '../components/View';

import userData from '../data/users';
import mealsData from '../data/meals';
import foodData from '../data/foodData';

const  getCurrentUser = (users, userID) => {
  return _.find(users, { _userId: userID });
}

const getUserMeals = (mealsData, mealIds) => {
  return _.map(mealIds, meal => {
    return _.find(mealsData, {_mealId: meal})
  })
}

const mapStateToProps = (state) => {
  return {
    user: getCurrentUser(userData, state.userManager),
    view: state.viewManager,
    meals: getUserMeals(mealsData, getCurrentUser(userData, state.userManager).mealIds)
  }
}


const ViewContainer = connect(
  mapStateToProps
)(View)

export default ViewContainer;