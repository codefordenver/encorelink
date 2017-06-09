import moment from 'moment-timezone';
// import 'moment-timezone';

export function getFormattedDayAndTime(startDate, endDate) {
  const localTimezone = moment.tz.guess();

  const startDateMoment = moment(startDate);
  const day = startDateMoment.format('dddd, MMMM D, YYYY');
  const startTime = startDateMoment.tz(localTimezone).format('h:mm');
  const endTime = moment(endDate).tz(localTimezone).format('h:mm a z');
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
