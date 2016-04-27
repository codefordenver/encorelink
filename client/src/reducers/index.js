import { combineReducers } from 'redux';
import viewManager from './viewManager';
import userManager from './userManager';

const ketoApp = combineReducers({
  viewManager,
  userManager
})

export default ketoApp;