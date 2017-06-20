import {
  SHOW_MESSAGE,
  DISMISS_MESSAGE
} from '../constants/reduxConstants';

export function sendMessage(body) {
  return {
    type: SHOW_MESSAGE,
    payload: body
  };
}

export function dismissMessage(body) {
  return {
    type: DISMISS_MESSAGE
  };
}
