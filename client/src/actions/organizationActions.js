import { browserHistory } from 'react-router';
import { apiAction } from './modelActions';
import { getUserId } from '../reducers/userReducer';

export function createOrganization(formData) {
  return apiAction('post', (state) => `users/${getUserId(state)}/organization`, {
    body: formData,
    onSuccess: () => {
      browserHistory.push('/dashboard');
    }
  });
}

export function updateOrganization(formData, id) {
  return apiAction('put', (state) => `users/${getUserId(state)}/organization/${id}`, {
    body: formData,
    onSuccess: () => {
      browserHistory.push('/dashboard');
    }
  });
}
