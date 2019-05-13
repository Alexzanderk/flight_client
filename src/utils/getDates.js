import moment from 'moment';
// Function that we get range of day that we select
/**
 *
 * @param {Date - momentjs obj} startDate
 * @param {Date - momentjs obj} endDate
 */
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
