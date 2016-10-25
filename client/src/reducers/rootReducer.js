import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import userManager from './userManager';
import eventManager from './eventManager';

const encoreLinkReducer = combineReducers({
  userManager,
  eventManager,
  form: formReducer
});

export default encoreLinkReducer;
