import moment from 'moment-timezone';

export function getFormattedDayAndTime(date, endDate) {
  const localTimezone = moment.tz.guess();

  const startDateMoment = moment(date);
  const day = startDateMoment.format('dddd, MMMM D, YYYY');
  const start = moment(date).tz(localTimezone).format('h:mm');
  const end = moment(endDate).tz(localTimezone).format('h:mm a z');
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
