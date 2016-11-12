import { browserHistory } from 'react-router';
import { createApiAction, createAction, createErrorAction } from '../utils/reduxActions';
import { put, post } from '../utils/apiHelpers';
import { getUserId } from '../reducers/userManager';
import {
  CREATE_EVENT_FAIL,
  CREATE_EVENT_REQUEST,
  CREATE_EVENT_SUCCESS,
  SIGNUP_FOR_EVENT_FAILURE,
  SIGNUP_FOR_EVENT_SUCCESS,
  SIGNUP_FOR_EVENT
} from '../constants/reduxConstants';
import { correctDatesForKeys } from '../utils/dateFormatting';

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

const signUpForEventStart = createAction(SIGNUP_FOR_EVENT);
const signUpForEventSuccess = createAction(SIGNUP_FOR_EVENT_SUCCESS);
const signUpForEventFailure = createErrorAction(SIGNUP_FOR_EVENT_FAILURE);

export function signUpForEvent(event) {
  return createApiAction({
    callApi: (state) => put(`users/${getUserId(state)}/eventsAttending/rel/${event.id}`, {
      body: JSON.stringify({
        status: 'accepted' // until we actually implement a way to accept these
      })
    }),

    startAction: () => signUpForEventStart(),
    successAction: (res) => signUpForEventSuccess(res),
    failAction: (error) => signUpForEventFailure(error)
  });
}
