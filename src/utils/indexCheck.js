import { config } from '../config';
// Function for get right index of list item to check hightlightingIndex
/**
 *
 * @param {array} arrCities - array all data we find in DB for our query
 * @param {object} element - list item element that we compare
 * @param {number} airportLimit - limit to render airports
 */
export const checkIndex = (arrCities = [], element, airportLimit = config.search.airportLimit) => {
	const arrElements = arrCities.reduce((acc, curr) => {
		if (curr.airports.length > 1 && curr.flightable === null) {
			acc.push(curr);
			curr.airports.forEach((item, i) => i < airportLimit && acc.push(item));
		}

		if (curr.airports.length < 2 && curr.airports.length > 0 && curr.flightable === null) {
			acc.push(curr);
		}

		return acc;
	}, []);

	const index = arrElements.findIndex(item => item._id === element._id);

	return index;
};
