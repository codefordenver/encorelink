import moment from 'moment';

export function getFormattedDayAndTime(startDate, startTime, endTime) {
  const startDateMoment = moment(startDate);
  const day = startDateMoment.format('MMM ddd D');
  const start = moment(startTime).format('h:mm a');
  const end = moment(endTime).format('h:mm a');
  return {
    day,
    time: `${start}-${end}`
  };
}

export function correctDatesForKeys(obj, keys) {
  const objClone = { ...obj };
  keys.forEach(key => {
    objClone[key] = moment(objClone[key]);
  });
  return objClone;
}
