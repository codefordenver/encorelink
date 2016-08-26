import { combineReducers } from 'redux';
import userManager from './userManager';
import eventManager from './eventManager';


const encoreLinkReducer = combineReducers({
  userManager,
  eventManager
});

export default encoreLinkReducer;
