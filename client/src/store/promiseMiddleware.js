import { PROMISE_ACTION } from '../constants/reduxConstants';

function shouldCall(shouldCallPromise, getState) {
  return !shouldCallPromise ||
         (typeof shouldCallPromise === 'function' &&
          shouldCallPromise(getState()));
}

function handlePromise(action, dispatch, getState) {
  const { createPromise, shouldCallPromise, startAction, successAction, failAction } = action.meta;

  if (shouldCall(shouldCallPromise, getState)) {
    if (typeof startAction === 'function') {
      dispatch(startAction(getState()));
    }

    createPromise(getState())
      .then((data) => {
        if (typeof successAction === 'function') {
          dispatch(successAction(data, getState()));
        }
      })
      .catch((err) => {
        if (typeof failAction === 'function') {
          dispatch(failAction(err, getState()));
        }
      });
  }
}

function createPromiseMiddleware({ dispatch, getState }) {
  return next => action => {
    if (action.type === PROMISE_ACTION) {
      return handlePromise(action, dispatch, getState);
    }

    return next(action);
  };
}

export default createPromiseMiddleware;
