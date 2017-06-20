import {
  SHOW_MESSAGE,
  DISMISS_MESSAGE
} from '../constants/reduxConstants';

export const stateKey = 'flashMessage';

const initialState = {
  body: '',
  shown: false
};

function flashMessageReducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case SHOW_MESSAGE:
      return {
        body: payload,
        shown: true
      };
    case DISMISS_MESSAGE:
      return {
        ...state,
        shown: false
      };
    default:
      return state;
  }
}

export default flashMessageReducer;
