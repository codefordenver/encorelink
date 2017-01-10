import { createAction, createErrorAction } from '../utils/reduxActions';
import { get, post, put, patch, del } from '../utils/apiHelpers';
import {
  API_ACTION_START,
  API_ACTION_SUCCESS,
  API_ACTION_FAIL
} from '../constants/reduxConstants';

const api = { get, put, post, patch, delete: del };


export const apiActionStart = createAction(API_ACTION_START);
export const apiActionSuccess = createAction(API_ACTION_SUCCESS);
export const apiActionFail = createErrorAction(API_ACTION_FAIL);

// example: apiAction('put', 'users/1/eventsAttending/rel/1')
// example: apiAction('post', (state) => 'users/1/events', { body: eventData })
// urlFn can be either a string, or a function that resolves to a string
export function apiAction(method, urlFn, { body, urlParams, onSuccess } = {}) {
  return async (dispatch, getState) => {
    const url = (typeof urlFn === 'function') ? urlFn(getState()) : urlFn;
    const metaData = { method, url, body, urlParams };

    try {
      dispatch(apiActionStart(null, metaData));
      const response = await api[method](url, { body, urlParams });
      dispatch(apiActionSuccess(response, metaData));

      if (typeof onSuccess === 'function') {
        onSuccess(response, getState());
      }
    } catch (apiError) {
      dispatch(apiActionFail(apiError, metaData));
    }
  };
}
