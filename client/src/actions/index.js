import { createApiAction, createAction } from '../utils/reduxActions';
import {
  CREATE_EVENT_REQUEST,
  GET_VOLUNTEER_EVENTS_REQUEST,
  GET_VOLUNTEER_EVENTS_SUCCESS,
  LOGIN_FAILURE,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  RECEIVE_USER,
  REGISTER_FAILURE,
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
  REQUEST_USER
} from '../constants/reduxConstants';

const requestUser = createAction(REQUEST_USER);
const receiveUser = createAction(RECEIVE_USER);

export function fetchUser(userid) {
  return createApiAction({
    callApi: () => fetch(`http://localhost:3000/api/Users/${userid}`)
      .then(response => response.json()),
    startAction: () => requestUser(userid),
    successAction: (res) => receiveUser(res)
  });
}

const startLoginRequest = createAction(LOGIN_REQUEST);
const loginSuccess = createAction(LOGIN_SUCCESS);
const loginFailure = createAction(LOGIN_FAILURE);

export function loginRequest(email, password) {
  return createApiAction({
    callApi: () => fetch('/api/users/login', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
      headers: { 'Content-Type': 'application/json' }
    }).then(res => res.json()),

    startAction: startLoginRequest,
    successAction: (res) => {
      localStorage.setItem('userToken', res.id);
      return loginSuccess(res);
    },
    failAction: (res) => loginFailure(res.error)
  });
}

const startCreateEventRequest = createAction(CREATE_EVENT_REQUEST);

export function createEvent(name, date) {
  return createApiAction({
    callApi: () => fetch('/api/events', {
      method: 'POST',
      body: JSON.stringify({ name, date }),
      headers: { 'Content-Type': 'application/json' }
    }).then(res => res.json()),

    startAction: () => startCreateEventRequest(),
    failAction: (res) => console.log(res.error)
  });
}

const startGetVolunteerEvents = createAction(GET_VOLUNTEER_EVENTS_REQUEST);
const volunteerViewEventsSuccess = createAction(GET_VOLUNTEER_EVENTS_SUCCESS);

export function volunteerViewEvents() {
  return createApiAction({
    callApi: () => fetch('/api/events', {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' }
    }).then(res => res.json()),

    startAction: () => startGetVolunteerEvents(),
    successAction: (res) => volunteerViewEventsSuccess(res),
    failAction: (res) => console.log(res.error)
  });
}

const startRegisterRequest = createAction(REGISTER_REQUEST);
const registerSuccess = createAction(REGISTER_SUCCESS);
const registerFailure = createAction(REGISTER_FAILURE);

function registerSuccessAndLogin(response, email, password) {
  return dispatch => {
    dispatch(registerSuccess(response));
    dispatch(loginRequest(email, password));
  };
}

export function registerRequest(email, password) {
  return createApiAction({
    callApi: () => fetch('/api/users', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
      headers: { 'Content-Type': 'application/json' }
    }).then(res => res.json()),

    startAction: () => startRegisterRequest(),
    successAction: (res) => registerSuccessAndLogin(res, email, password),
    failAction: (res) => registerFailure(res.error)
  });
}
