export const checkIndex = (arrCities = [], element) => {
	const arrElements = arrCities.reduce((acc, curr) => {
		if (curr.airports.length > 1 && curr.flightable === null) {
			acc.push(curr);
			curr.airports.forEach(item => acc.push(item));
		}

		if (curr.airports.length < 2 && curr.airports.length > 0 && curr.flightable === null) {
			acc.push(curr);
		}

		return acc;
	}, []);

	const index = arrElements.findIndex(item => item._id === element._id);

	return index;
};
