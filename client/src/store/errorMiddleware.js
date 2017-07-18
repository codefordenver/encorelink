function handleError(action = {}, dispatch) {
  // currently showing flash message on all alerts.
  dispatch({ type: 'SHOW_MESSAGE', payload: action.meta && action.meta.errorMessage });
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
