import { PROMISE_ACTION } from '../constants/reduxConstants';

export function createPromiseAction({
  createPromise,
  shouldCallPromise,
  startAction,
  successAction,
  failAction
}) {
  if (typeof createPromise !== 'function') {
    throw new TypeError(`createPromiseAction requires a createPromise function.
Instead saw: ${createPromise}`);
  }

  return {
    type: PROMISE_ACTION,
    meta: { createPromise, shouldCallPromise, startAction, successAction, failAction }
  };
}

export function createApiAction({
  callApi,
  shouldCallApi,
  requestAction,
  successAction,
  failAction
}) {
  return createPromiseAction({
    createPromise: callApi,
    shouldCallPromise: shouldCallApi,
    startAction: requestAction,
    successAction,
    failAction
  });
}

export function createAction(type) {
  return (payload) => {
    return { type, payload };
  };
}

export function createErrorAction(type, message) {
  return (data) => {
    return {
      type,
      payload: data,
      error: true,
      meta: {
        errorMessage: message || data.message
      }
    };
  };
}
