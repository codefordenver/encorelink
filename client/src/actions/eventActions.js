import { browserHistory } from 'react-router';
import { PENDING, APPROVED, REJECTED } from '../constants/eventAttendingStatus';
import { getUserId } from '../reducers/userReducer';
import { getModels } from '../reducers/modelsReducer';
import { correctDatesForKeys } from '../utils/dateFormatting';
import { apiAction } from './modelActions';

export function createEvent(formData) {
  const postData = correctDatesForKeys(formData, ['date', 'startTime', 'endTime']);
  postData.date.set({
    hours: postData.startTime.get('hours'),
    minutes: postData.startTime.get('minutes'),
    seconds: postData.startTime.get('seconds')
  });
  postData.endDate = postData.endTime.set({
    date: postData.date.get('date'),
    month: postData.date.get('month'),
    year: postData.date.get('year')
  });
  return apiAction('post', (state) => `users/${getUserId(state)}/events`, {
    body: postData,

    onSuccess: (res, state) => {
      const organizations = getModels(state, `users/${getUserId(state)}/organization`) || [];
      if (organizations.length) {
        browserHistory.push('/dashboard');
        return;
      }

      browserHistory.push('/organizerProfile');
    }
  });
}

export function signUpForEvent(event) {
  return apiAction('put', (state) =>
  `users/${getUserId(state)}/eventsAttending/rel/${event.id}`, {
    body: {
      status: PENDING
    },
    onSuccess: () => {
      browserHistory.push('/dashboard');
    }
  });
}

export function deleteEvent(event) {
  return apiAction('delete', (state) =>
    `events/${event.id}`, {
      onSuccess: () => {
        browserHistory.replace('/events');
      }
    }
  );
}

export function cancelSignUpForEvent(event) {
  return apiAction('delete', (state) =>
  `users/${getUserId(state)}/eventsAttending/rel/${event.id}`, {
    onSuccess: () => {
      browserHistory.push('/dashboard');
    }
  });
}

export function approveEventMusician(eventMusician) {
  return apiAction('put', `eventVolunteers/${eventMusician.id}`, {
    body: {
      status: APPROVED
    }
  });
}

export function rejectEventMusician(eventMusician) {
  return apiAction('put', `eventVolunteers/${eventMusician.id}`, {
    body: {
      status: REJECTED
    }
  });
}
