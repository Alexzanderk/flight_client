export default function reducer(state, { type, payload }) {
	switch (type) {
		case 'LOGIN':
			return {
				...state,
				currentUser: payload
			};

		case 'IS_LOGGED_IN':
			return {
				...state,
				isAuth: payload
			};

		case 'LOGOUT':
			return {
				...state,
				isAuth: false,
				currentUser: null
			};

		case 'TOGGLE_HEADER_MENU':
			return {
				...state,
				header: { menu: { isOpen: payload } }
			};

		case 'TOGGLE_ONESIDE_SWITCHER':
			return {
				...state,
				flight: {
					searchOptions: {
						...state.flight.searchOptions,
						oneSide: !state.flight.searchOptions.oneSide,
						endDate: null
					}
				}
			};

		case 'SET_START_DATE':
			return {
				...state,
				flight: {
					searchOptions: { ...state.flight.searchOptions, startDate: payload }
				}
			};

		case 'SET_END_DATE':
			return {
				...state,
				flight: {
					searchOptions: { ...state.flight.searchOptions, endDate: payload }
				}
			};

		case 'INC_COUNT':
			return {
				...state,
				flight: {
					searchOptions: {
						...state.flight.searchOptions,
						[payload.name]: payload.count
					}
				}
			};

		case 'DEC_COUNT':
			return {
				...state,
				flight: {
					searchOptions: {
						...state.flight.searchOptions,
						[payload.name]: payload.count
					}
				}
			};

		case 'SET_FLIGHT_CLASS':
			return {
				...state,
				flight: {
					searchOptions: { ...state.flight.searchOptions, flightClass: payload }
				}
			};

		case 'SET_FROM_ARRIVE':
			return {
				...state,
				flight: {
					searchOptions: { ...state.flight.searchOptions, from: payload }
				}
			};

		case 'SET_TO_ARRIVE':
			return {
				...state,
				flight: {
					searchOptions: { ...state.flight.searchOptions, to: payload }
				}
			};

		default:
			return state;
	}
}
