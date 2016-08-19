import { combineReducers } from 'redux';
import userManager from './userManager';
import userMeals from './userMeals';


const encoreLinkReducer = combineReducers({
  userManager,
  userMeals
});

export default encoreLinkReducer;
