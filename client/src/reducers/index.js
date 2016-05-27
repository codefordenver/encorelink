import { combineReducers } from 'redux';
import userManager from './userManager';
import food from './food';


const ketoApp = combineReducers({
  userManager,
  food
});

export default ketoApp;
