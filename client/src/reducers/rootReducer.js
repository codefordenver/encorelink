import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import recycleState from 'redux-recycle';

import userReducer, { stateKey as userStateKey } from './userReducer';
import miscStateReducer, { stateKey as miscStateStateKey } from './miscStateReducer';
import modelsReducer, { stateKey as modelsReducerStateKey } from './modelsReducer';
import { LOGOUT } from '../constants/reduxConstants';

/**
 * We use this convenience function from Redux to allow us to combine all the
 * reducers into one big reducer that handles all of our state, while allowing
 * us to keep the reducers in separate files for better organization.
 */
const encoreLinkReducer = combineReducers({
  [userStateKey]: userReducer,
  [miscStateStateKey]: miscStateReducer,
  [modelsReducerStateKey]: modelsReducer,
  form: formReducer
});

// resets the redux state on LOGOUT action
const resetableRootReducer = recycleState(encoreLinkReducer, [
  LOGOUT
]);

export default resetableRootReducer;
