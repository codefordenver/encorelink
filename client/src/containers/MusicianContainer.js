import gimmeData from '../utils/gimmeData';
import { apiAction } from '../actions/modelActions';
import MusicianProfile from '../components/MusicianProfile';
import { getUserId } from '../reducers/userReducer';

function urlFn(state) {
  return `users/${getUserId(state)}`;
}

const createMusician = (formData) => {
  const data = Object.assign({}, formData, { instruments: [formData.majorInstrument, formData.secondaryInstrument] });

  return apiAction('put', (state) => `users/${getUserId(state)}`, {
    body: data,
  });
}

const mapDispatchToProps = {
  onSubmit: createMusician
};

export default gimmeData(urlFn, null, mapDispatchToProps)(MusicianProfile);
