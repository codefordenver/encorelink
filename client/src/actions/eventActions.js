import { browserHistory } from 'react-router';
import { PENDING, APPROVED, REJECTED } from '../constants/eventAttendingStatus';
import { createApiAction, createAction, createErrorAction } from '../utils/reduxActions';
import { put } from '../utils/apiHelpers';
import { getUserId, getUser } from '../reducers/userReducer';
import {
  APPROVE_EVENTMUSICIAN_FAILURE,
  APPROVE_EVENTMUSICIAN_SUCCESS,
  APPROVE_EVENTMUSICIAN,
  REJECT_EVENTMUSICIAN_FAILURE,
  REJECT_EVENTMUSICIAN_SUCCESS,
  REJECT_EVENTMUSICIAN,
  SIGNUP_FOR_EVENT_FAILURE,
  SIGNUP_FOR_EVENT_SUCCESS,
  SIGNUP_FOR_EVENT

} from '../constants/reduxConstants';
import { correctDatesForKeys } from '../utils/dateFormatting';
import { apiAction } from './modelActions';

export function createEvent(formData) {
  return apiAction('post', (state) => `users/${getUserId(state)}/events`, {
    body: correctDatesForKeys(formData, ['date', 'endDate']),

    onSuccess: (res, state) => {
      const organizations = getUser(state).organizations || [];
      if (organizations.length) {
        browserHistory.push('/events');
        return;
      }

      browserHistory.push('/organizerProfile');
    }
  });
}

const signUpForEventStart = createAction(SIGNUP_FOR_EVENT);
const signUpForEventSuccess = createAction(SIGNUP_FOR_EVENT_SUCCESS);
const signUpForEventFailure = createErrorAction(SIGNUP_FOR_EVENT_FAILURE);

export function signUpForEvent(event) {
  return createApiAction({
    callApi: (state) => put(`users/${getUserId(state)}/eventsAttending/rel/${event.id}`, {
      body: {
        status: PENDING
      }
    }),

    startAction: () => signUpForEventStart(),
    successAction: (res) => {
      browserHistory.push('/eventsAttending');
      return signUpForEventSuccess(res);
    },
    failAction: (error) => signUpForEventFailure(error)
  });
}

const approveEventMusicianStart = createAction(APPROVE_EVENTMUSICIAN);
const approveEventMusicianSuccess = createAction(APPROVE_EVENTMUSICIAN_SUCCESS);
const approveEventMusicianFailure = createErrorAction(APPROVE_EVENTMUSICIAN_FAILURE);

export function approveEventMusician(eventMusician) {
  return createApiAction({
    callApi: () => put(`EventVolunteers/${eventMusician.id}`, {
      body: {
        status: APPROVED
      }
    }),

    startAction: () => approveEventMusicianStart(),
    successAction: (res) => {
      return approveEventMusicianSuccess(res);
    },
    failAction: (error) => approveEventMusicianFailure(error)
  });
}

const rejectEventMusicianStart = createAction(REJECT_EVENTMUSICIAN);
const rejectEventMusicianSuccess = createAction(REJECT_EVENTMUSICIAN_SUCCESS);
const rejectEventMusicianFailure = createErrorAction(REJECT_EVENTMUSICIAN_FAILURE);

export function rejectEventMusician(eventMusician) {
  return createApiAction({
    callApi: () => put(`EventVolunteers/${eventMusician.id}`, {
      body: {
        status: REJECTED
      }
    }),

    startAction: () => rejectEventMusicianStart(),
    successAction: (res) => {
      return rejectEventMusicianSuccess(res);
    },
    failAction: (error) => rejectEventMusicianFailure(error)
  });
}
