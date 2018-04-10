import gimmeData from '../utils/gimmeData';
import EventMusicians from '../components/EventMusicians';
import { approveEventMusician, rejectEventMusician } from '../actions/eventActions';

function urlFn(state, props) {
  const id = props.eventId;
  return `eventVolunteers?filter=${JSON.stringify({
    where: {
      eventId: id
    },
    include: 'volunteer'
  })}`;
}

const mapDispatchToProps = {
  approveEventMusician,
  rejectEventMusician
};

export default gimmeData(urlFn, null, mapDispatchToProps)(EventMusicians);
