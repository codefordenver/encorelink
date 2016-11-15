import { REHYDRATE } from 'redux-persist/constants';

const initialState = {
  appInitiallized: false
};

export default function miscStateManager(state = initialState, action) {
  switch (action.type) {
    case REHYDRATE:
    // NOTE: Don't want redux-recycle's LOGOUT action to affect the appInitiallized value
    case '@@redux-recycle/INIT': // eslint-disable-line no-fallthrough
      return {
        ...state,
        appInitiallized: true
      };

    default:
      return state;
  }
}

export function isAppInitialized(state) { return state.miscStateManager.appInitiallized; }
