import { REHYDRATE } from 'redux-persist/constants';

const initialState = {
  appInitiallized: false
};

export default function miscStateManager(state = initialState, action) {
  switch (action.type) {
    case REHYDRATE:
      return {
        ...state,
        appInitiallized: true
      };

    default:
      return state;
  }
}

export function isAppInitialized(state) { return state.miscStateManager.appInitiallized; }
