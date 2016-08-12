import { combineReducers } from 'redux';
import userManager from './userManager';
import food from './food';
import userMeals from './userMeals';


const encoreLinkApp = combineReducers({
  userManager,
  food,
  userMeals
});

export default encoreLinkApp;
