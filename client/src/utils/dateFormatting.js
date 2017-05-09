import moment from 'moment';

export function getFormattedDayAndTime(startDate, endDate) {
  const startDateMoment = moment(startDate);
  const day = startDateMoment.format('dddd, MMMM D, YYYY');
  const startTime = startDateMoment.format('h:mm');
  const endTime = moment(endDate).format('h:mm a');
  return {
    day,
    time: `${startTime}-${endTime}`
  };
}

export function correctDatesForKeys(obj, keys) {
  const objClone = { ...obj };
  keys.forEach(key => {
    objClone[key] = moment(objClone[key]);
  });
  return objClone;
}
