import OrganizerProfile from '../components/OrganizerProfile';
import { createOrganization, updateOrganization } from '../actions/organizationActions';
import { getUserId } from '../reducers/userReducer';
import gimmeData from '../utils/gimmeData';
import { getModels } from '../reducers/modelsReducer';

function urlFn(state) {
  return `users/${getUserId(state)}/organization`;
}

const mapDispatchToProps = {
  createOrganization,
  updateOrganization
};

function getInitialValues(state) {
  const organizations = getModels(state, urlFn(state)) || [];
  return organizations[0];
}

function mapStateToProps(state) {
  return {
    initialValues: getInitialValues(state)
  };
}

export default gimmeData(urlFn, mapStateToProps, mapDispatchToProps)(OrganizerProfile);
