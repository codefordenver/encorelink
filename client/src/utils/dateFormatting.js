import moment from 'moment';

export function getFormattedDayAndTime(startDate, endDate) { // eslint-disable-line import/prefer-default-export
  const startDateMoment = moment(startDate);
  const day = startDateMoment.format('MMM ddd D');
  const startTime = startDateMoment.format('h:mm');
  const endTime = moment(endDate).format('h:mm a');
  return {
    day,
    time: `${startTime}-${endTime}`
  };
}
