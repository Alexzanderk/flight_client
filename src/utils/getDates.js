import moment from 'moment';

export function getDates(startDate, endDate) {
  var dateArray = [];
  var currentDate = moment(startDate);
  // eslint-disable-next-line no-redeclare
  var stopDate = moment(endDate);
  while (currentDate <= stopDate) {
    dateArray.push(moment(currentDate));
    currentDate = moment(currentDate).add(1, 'days');
  }
  return dateArray;
}
