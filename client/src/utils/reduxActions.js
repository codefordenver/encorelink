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
  return (data) => {
    const action = {
      type,
      payload: data
    };

    return action;
  };
}
