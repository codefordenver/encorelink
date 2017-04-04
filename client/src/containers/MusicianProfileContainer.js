import MusicianProfile from '../components/MusicianProfile';
import { updateUser } from '../actions/userActions';
import { getUserId } from '../reducers/userReducer';
import gimmeData from '../utils/gimmeData';
import { getModels } from '../reducers/modelsReducer';

function urlFn(state) {
  return `users/${getUserId(state)}`;
}

const mapDispatchToProps = {
  updateUser
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

export default gimmeData(urlFn, mapStateToProps, mapDispatchToProps)(MusicianProfile);
