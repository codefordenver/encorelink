import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import userManager from './userManager';
import eventManager from './eventManager';
import miscStateManager from './miscStateManager';

const encoreLinkReducer = combineReducers({
  userManager,
  eventManager,
  miscStateManager,
  form: formReducer
});

export default encoreLinkReducer;
