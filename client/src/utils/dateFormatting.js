import moment from 'moment-timezone';

export function getFormattedDayAndTime(date, endDate) {
  const localTimezone = moment.tz.guess();

  const startDateMoment = moment(date).tz(localTimezone);
  const endDateMoment = moment(endDate).tz(localTimezone);
  const day = startDateMoment.format('dddd, MMMM D, YYYY');
  const startTime = startDateMoment.format('h:mm');
  const endTime = endDateMoment.format('h:mm a z');
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
