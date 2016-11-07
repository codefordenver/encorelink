import { browserHistory } from 'react-router';

import { createApiAction, createAction, createErrorAction } from '../utils/reduxActions';
import {
  CREATE_EVENT_FAIL,
  CREATE_EVENT_REQUEST,
  CREATE_EVENT_SUCCESS,
  LOAD_EVENTS_FAILURE,
  LOAD_EVENTS_REQUEST,
  LOAD_EVENTS_SUCCESS,
  LOAD_EVENT_SUCCESS,
  LOGIN_FAILURE,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGOUT,
  RECEIVE_USER_FAILURE,
  RECEIVE_USER,
  REGISTER_FAILURE,
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
  REQUEST_USER,
  START_LOGIN_VALID_CHECK
} from '../constants/reduxConstants';
import { getUserId } from '../reducers/userManager';
import { get, post } from '../utils/apiHelpers';
import { correctDatesForKeys } from '../utils/dateFormatting';

const requestUser = createAction(REQUEST_USER);
const receiveUser = createAction(RECEIVE_USER);
const receiveUserFail = createErrorAction(RECEIVE_USER_FAILURE);

export function fetchUser(userid) {
  return createApiAction({
    callApi: () => get(`users/${userid}`),
    startAction: () => requestUser(userid),
    successAction: (res) => receiveUser(res),
    failAction: (err) => receiveUserFail(err)
  });
}

const startLoginRequest = createAction(LOGIN_REQUEST);
const loginSuccess = createAction(LOGIN_SUCCESS);
const loginFailure = createErrorAction(LOGIN_FAILURE);

export function loginRequest(loginData) {
  return createApiAction({
    callApi: () => post('users/login?include=user', {
      body: JSON.stringify(loginData),
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

const startCreateEventRequest = createAction(CREATE_EVENT_REQUEST);
const startCreateEventSuccess = createAction(CREATE_EVENT_SUCCESS);
const createEventFail = createErrorAction(CREATE_EVENT_FAIL);

export function createEvent(formData) {
  return createApiAction({
    callApi: (state) =>
      post(`users/${getUserId(state)}/events`, {
        body: JSON.stringify(correctDatesForKeys(formData, ['date', 'endDate'])),
      }),

    startAction: () => startCreateEventRequest(),
    successAction: (res) => {
      browserHistory.push(`/event/${res.id}`);
      return startCreateEventSuccess(res);
    },
    failAction: (error) => createEventFail(error)
  });
}

const startGetVolunteerEvents = createAction(LOAD_EVENTS_REQUEST);
const loadEventsFail = createErrorAction(LOAD_EVENTS_FAILURE);

const loadEventsSuccess = createAction(LOAD_EVENTS_SUCCESS);
const loadEventSuccess = createAction(LOAD_EVENT_SUCCESS);

export function loadEvents(id) {
  return createApiAction({
    callApi: () => get(`events${id ? `/${id}` : ''}`),

    startAction: () => startGetVolunteerEvents(),
    successAction: (res) => {
      return id ? loadEventSuccess(res) : loadEventsSuccess(res);
    },
    failAction: (error) => loadEventsFail(error)
  });
}

export function loadEvent(id) {
  return loadEvents(id);
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
      body: JSON.stringify({ isMusician, email, password })
    }),

    startAction: () => startRegisterRequest(),
    successAction: (res) => registerSuccessAndLogin(res, email, password),
    failAction: (error) => registerFailure(error)
  });
}

const startLoginValidCheck = createAction(START_LOGIN_VALID_CHECK);

export function checkIfLoginIsValid() {
  return createApiAction({
    shouldCallApi: (state) => getUserId(state),
    callApi: (state) => get(`users/${getUserId(state)}`),
    startAction: startLoginValidCheck,
    failAction: logoutUser
  });
}
