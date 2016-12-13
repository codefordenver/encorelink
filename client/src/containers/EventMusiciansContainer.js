import gimmeData from '../utils/gimmeData';
import EventMusicians from '../components/EventMusicians';

function urlFn(state, props) {
  const id = props.eventId;
  return `EventVolunteers?filter=${JSON.stringify({
    where: {
      eventId: id
    },
    include: 'volunteer'
  })}`;
}

export default gimmeData(urlFn)(EventMusicians);
