import { LOGOUT } from '../constants/reduxConstants';

let purgeClientStoredState;

export function allowPersistenceToBePurgedOnLogout(purge) {
  purgeClientStoredState = purge;
}

function createLogoutPurgeMiddleware() {
  return next => action => {
    if (action.type === LOGOUT) {
      purgeClientStoredState();
    }

    return next(action);
  };
}

export default createLogoutPurgeMiddleware;
