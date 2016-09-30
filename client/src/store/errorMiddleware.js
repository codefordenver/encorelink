function handleError(action) {
  // Yes I am going to 'alert' because at least that
  // way the user knows whats happening when something
  // errors until we get a better ui for it.
  alert(action.meta.errorMessage);
}

function createErrorMiddleware({ dispatch, getState }) {
  return next => action => {
    if (action.error) {
      handleError(action, dispatch, getState);
    }

    return next(action);
  };
}

export default createErrorMiddleware;
