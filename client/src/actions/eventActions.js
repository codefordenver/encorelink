import { browserHistory } from 'react-router';
import { PENDING, APPROVED, REJECTED } from '../constants/eventAttendingStatus';
import { getUserId } from '../reducers/userReducer';
import { getModels } from '../reducers/modelsReducer';
import { correctDatesForKeys } from '../utils/dateFormatting';
import { apiAction } from './modelActions';

export function createEvent(formData) {
  return apiAction('post', (state) => `users/${getUserId(state)}/events`, {
    body: correctDatesForKeys(formData, ['date', 'endDate']),

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
