import OrganizerProfile from '../components/OrganizerProfile';
import { createOrganization } from '../actions/organizationActions';
import { getUserId } from '../reducers/userReducer';
import gimmeData from '../utils/gimmeData';

function urlFn(state) {
  return `users/${getUserId(state)}/organization`;
}

const mapDispatchToProps = {
  onSubmit: createOrganization
};

export default gimmeData(urlFn, mapDispatchToProps, mapDispatchToProps)(OrganizerProfile);
