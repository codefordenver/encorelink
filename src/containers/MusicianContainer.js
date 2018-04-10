import ViewMusician from '../components/ViewMusician';
import gimmeData from '../utils/gimmeData';

function urlFn(state, props) {
  const userId = props.params.id;
  return `users/${userId}`;
}

export default gimmeData(urlFn)(ViewMusician);
