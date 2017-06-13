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
  startAction,
  successAction,
  failAction
}) {
  return createPromiseAction({
    createPromise: callApi,
    shouldCallPromise: shouldCallApi,
    startAction,
    successAction,
    failAction
  });
}

export function createAction(type) {
  return (payload, metaData) => {
    return { type, payload, meta: metaData };
  };
}

export function createErrorAction(type, message) {
  return (data, metaData) => {
    return {
      type,
      payload: data,
      error: true,
      meta: {
        errorMessage: message || data.message,
        ...metaData
      }
    };
  };
}
