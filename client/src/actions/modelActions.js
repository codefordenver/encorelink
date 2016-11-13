import { createApiAction, createAction, createErrorAction } from '../utils/reduxActions';
import { get, post, put, patch, del } from '../utils/apiHelpers';
import {
  API_ACTION_START,
  API_ACTION_SUCCESS,
  API_ACTION_FAIL
} from '../constants/reduxConstants';

const api = { get, put, post, patch, delete: del };


const apiActionStart = createAction(API_ACTION_START);
const apiActionSuccess = createAction(API_ACTION_SUCCESS);
const apiActionFail = createErrorAction(API_ACTION_FAIL);

// example: apiAction('put', 'users/1/eventsAttending/rel/1')
// example: apiAction('post', 'users/1/events', { body: eventData, params: { ... } })
export function apiAction(method, url, options) { // eslint-disable-line import/prefer-default-export
  const metaData = { method, url, options };

  return createApiAction({
    // TODO: shouldCallApi: modelManager.shouldCallApi(url),
    callApi: () => api[method](url, options),

    startAction: () => apiActionStart(null, metaData),
    successAction: (res) => apiActionSuccess(res, metaData),
    failAction: (err) => apiActionFail(err, metaData)
  });
}
