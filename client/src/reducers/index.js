import { combineReducers } from 'redux';
import viewManager from './viewManager';
import userManager from './userManager';
import food from './food';


const ketoApp = combineReducers({
  viewManager,
  userManager,
  food
})

export default ketoApp;
