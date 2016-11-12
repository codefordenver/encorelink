import { connect } from 'react-redux';
import { loadEvents } from '../actions';
import { getModels, dbViewIsFetching } from '../reducers/modelManager';
import Events from '../components/Events';

const mapStateToProps = (state) => {
  return {
    isFetching: dbViewIsFetching(state, 'events'),
    events: getModels(state, 'events')
  };
};

const mapDispatchToProps = {
  loadEvents
};

export default connect(mapStateToProps, mapDispatchToProps)(Events);
