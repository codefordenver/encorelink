import { createApiAction, createAction } from '../utils/reduxActions';
import {
  CREATE_EVENT_REQUEST,
  GET_VOLUNTEER_EVENTS_REQUEST,
  GET_VOLUNTEER_EVENTS_SUCCESS,
  LOGIN_FAILURE,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGOUT,
  RECEIVE_USER,
  REGISTER_FAILURE,
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
  REQUEST_USER,
  GET_LOCAL_DATA
} from '../constants/reduxConstants';
import { getUserId, getUserToken } from '../reducers/userManager';

const loadLocalData = createAction(GET_LOCAL_DATA);

export function getLocalData() {
  const userId = Number(localStorage.userId);
  const userToken = localStorage.userToken;
  return loadLocalData({ userId, userToken });
}

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
      localStorage.setItem('userId', res.userId);
      localStorage.setItem('userToken', res.id);
      return loginSuccess(res);
    },
    failAction: (res) => loginFailure(res.error)
  });
}

const logout = createAction(LOGOUT);
export function logoutUser() {
  localStorage.removeItem('userId');
  localStorage.removeItem('userToken');
  return logout();
}

const startCreateEventRequest = createAction(CREATE_EVENT_REQUEST);

export function createEvent(name, date) {
  return createApiAction({
    callApi: (state) =>
    fetch(`/api/users/${getUserId(state)}/events?access_token=${getUserToken(state)}`, {
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

export function registerRequest(email, password, isVolunteer) {
  return createApiAction({
    callApi: () => fetch('/api/users', {
      method: 'POST',
      body: JSON.stringify({ isVolunteer, email, password }),
      headers: { 'Content-Type': 'application/json' }
    }).then(res => res.json()),

    startAction: () => startRegisterRequest(),
    successAction: (res) => registerSuccessAndLogin(res, email, password),
    failAction: (res) => registerFailure(res.error)
  });
}
