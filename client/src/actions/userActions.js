import { browserHistory } from 'react-router';
import { createApiAction, createAction, createErrorAction } from '../utils/reduxActions';
import {
  LOGIN_FAILURE,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGOUT,
  RECEIVE_USER,
  REGISTER_FAILURE,
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
  START_LOGIN_VALID_CHECK
} from '../constants/reduxConstants';
import { getUserId } from '../reducers/userReducer';
import { get, post } from '../utils/apiHelpers';
import { apiAction } from './modelActions';

const startLoginRequest = createAction(LOGIN_REQUEST);
const loginSuccess = createAction(LOGIN_SUCCESS);
const loginFailure = createErrorAction(LOGIN_FAILURE);

export function loginRequest(loginData) {
  return createApiAction({
    callApi: () => post('users/login?include=user', {
      body: loginData,
    }),
    startAction: startLoginRequest,
    successAction: (res) => loginSuccess(res),
    failAction: (error) => loginFailure(error)
  });
}

const logout = createAction(LOGOUT);

export function logoutUser() {
  browserHistory.push('/');
  return logout();
}

const startRegisterRequest = createAction(REGISTER_REQUEST);
const registerSuccess = createAction(REGISTER_SUCCESS);
const registerFailure = createErrorAction(REGISTER_FAILURE);

function registerSuccessAndLogin(response, email, password) {
  return dispatch => {
    dispatch(registerSuccess(response));
    dispatch(loginRequest({ email, password }));
  };
}

export function registerRequest(email, password, isMusician) {
  return createApiAction({
    callApi: () => post('users', {
      body: { isMusician, email, password }
    }),

    startAction: () => startRegisterRequest(),
    successAction: (res) => registerSuccessAndLogin(res, email, password),
    failAction: (error) => registerFailure(error)
  });
}

const startLoginValidCheck = createAction(START_LOGIN_VALID_CHECK);
const receiveUser = createAction(RECEIVE_USER);

export function checkIfLoginIsValid() {
  return createApiAction({
    shouldCallApi: (state) => getUserId(state),
    callApi: (state) => get(`users/${getUserId(state)}`),
    startAction: startLoginValidCheck,
    successAction: receiveUser,
    failAction: logoutUser
  });
}

export function updateUser(formData, id) {
  return apiAction('put', (state) => `users/${getUserId(state)}`, {
    body: formData,
    onSuccess: () => {
      browserHistory.push('/events');
    }
  });
}

export function sendPasswordReset(formData) {
  return createApiAction({
    callApi: () => post('users/reset', { body: formData }),
    // successAction: receiveUser,
    // failAction: logoutUser
  });
}

export function resetPasswordFromToken(newPass, uid, token) {
  return apiAction('patch', `users/${uid}?access_token=${token}`, {
    body: { password: newPass },
    onSuccess: () => {
      browserHistory.push('/login');
    }
  });
}
