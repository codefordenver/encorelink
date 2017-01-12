import { browserHistory } from 'react-router';
import { apiAction } from './modelActions';
import { getUserId } from '../reducers/userReducer';

export default function createOrganization(formData) {
  return apiAction('post', (state) => `users/${getUserId(state)}/organization`, {
    body: formData,
    onSuccess: () => {
      browserHistory.push('/events');
    }
  });
}
