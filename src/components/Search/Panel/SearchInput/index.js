import React, { useState, Fragment, useContext } from 'react';
import debounce from 'lodash.debounce';

import InputFrom from './components/InputFrom';
import InputTo from './components/InputTo';
import ReverseButton from './components/ReverseButton';

import { SEARCH_CITY_QUERY } from '../../../../graphql/queries';
import { useClient } from '../../../../client';
import Context from '../../../../context';
import { useStyles } from './hooks/useStyle';

const SearchInputWithDownshift = props => {
	const classes = useStyles();
	const client = useClient();
	const { dispatch } = useContext(Context);

	const [from, setFrom] = useState('');
	const [to, setTo] = useState('');
	const [result, setResult] = useState([]);
	console.log(result);

	const getData = debounce(async value => {
		if (!value) return;

		const variable = {
			query: value,
			limit: 5
		};
		try {
			const { searchCity } = await client.request(SEARCH_CITY_QUERY, variable);

			setResult(searchCity);
		} catch (error) {
			console.error(error);
		}
	}, 450);

	const handleChangeDirection = () => {
		setFrom(to);
		setTo(from);
		dispatch({ type: 'ARRIVE_REVERSE' });
	};

	const onUserAction = arrive => changes => {
		if (arrive === 'from') {
			if (changes.hasOwnProperty('inputValue')) {
				setFrom(changes.inputValue);
				getData(changes.inputValue);
			}

			if (changes.hasOwnProperty('selectedItem')) {
				setFrom(changes.selectedItem);
				dispatch({
					type: 'SET_FROM_ARRIVE',
					payload: changes.selectedItem
				});
			}

			return changes;
		}

		if (arrive === 'to') {
			if (changes.hasOwnProperty('inputValue')) {
				setTo(changes.inputValue);
				getData(changes.inputValue);
			}

			if (changes.hasOwnProperty('selectedItem')) {
				setTo(changes.selectedItem);
				dispatch({
					type: 'SET_TO_ARRIVE',
					payload: changes.selectedItem
				});
			}

			return changes;
		}
	};

	return (
		<div className={classes.container}>
			{React.Children.map(props.children, child => {
				if (child.type.displayname === 'InputFrom') {
					return React.cloneElement(child, {
						from,
						result,
						onUserAction
					});
				}

				if (child.type.displayname === 'InputTo') {
					return React.cloneElement(child, {
						to,
						result,
						onUserAction
					});
				}

				if (child.type.displayname === 'ReverseButton') {
					return React.cloneElement(child, {
						handleChangeDirection
					});
				}
			})}
		</div>
	);
};

SearchInputWithDownshift.InputFrom = InputFrom;
SearchInputWithDownshift.InputTo = InputTo;
SearchInputWithDownshift.ReverseButton = ReverseButton;

export default SearchInputWithDownshift;
