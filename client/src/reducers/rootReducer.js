import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import userManager from './userManager';
import eventManager from './eventManager';

/**
 * We use this convenience function from Redux to allow us to combine all the
 * reducers into one big reducer that handles all of our state, while allowing
 * us to keep the reducers in separate files for better organization. We've defined
 * the userManager and eventManager reducers (in this same folder), and we get the
 * formReducer from redux-form.
 */
const encoreLinkReducer = combineReducers({
  userManager,
  eventManager,
  form: formReducer
});

export default encoreLinkReducer;
