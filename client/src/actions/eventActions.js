import { createApiAction, createAction, createErrorAction } from '../utils/reduxActions';
import { get, put } from '../utils/apiHelpers';
import { getUserId } from '../reducers/userManager';
import {
  SIGNUP_FOR_EVENT,
  SIGNUP_FOR_EVENT_FAILURE,
  SIGNUP_FOR_EVENT_SUCCESS,
  LOAD_EVENTS_ATTENDING_START,
  LOAD_EVENTS_ATTENDING_SUCCESS,
  LOAD_EVENTS_ATTENDING_FAILURE
} from '../constants/reduxConstants';

const signUpForEventStart = createAction(SIGNUP_FOR_EVENT);
const signUpForEventSuccess = createAction(SIGNUP_FOR_EVENT_SUCCESS);
const signUpForEventFailure = createErrorAction(SIGNUP_FOR_EVENT_FAILURE);

export function signUpForEvent(event) { // eslint-disable-line import/prefer-default-export
  return createApiAction({
    callApi: (state) => put(`users/${getUserId(state)}/eventsAttending/rel/${event.id}`, {
      body: JSON.stringify({
        status: 'accepted' // until we actually implement a way to accept these
      })
    }),

    startAction: signUpForEventStart,
    successAction: signUpForEventSuccess,
    failAction: signUpForEventFailure
  });
}

const loadEventsAttendingStart = createAction(LOAD_EVENTS_ATTENDING_START);
const loadEventsAttendingSuccess = createAction(LOAD_EVENTS_ATTENDING_SUCCESS);
const loadEventsAttendingFailure = createAction(LOAD_EVENTS_ATTENDING_FAILURE);

export function loadEventsAttending() {
  return createApiAction({
    callApi: (state) => get(`/api/users/${getUserId(state)}/eventsAttending`),

    startAction: loadEventsAttendingStart,
    successAction: loadEventsAttendingSuccess,
    failAction: loadEventsAttendingFailure
  });
}
