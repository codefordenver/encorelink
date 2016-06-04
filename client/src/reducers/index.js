import { combineReducers } from 'redux';
import userManager from './userManager';
import food from './food';
import userMeals from './userMeals';


const ketoApp = combineReducers({
  userManager,
  food,
  userMeals
});

export default ketoApp;
