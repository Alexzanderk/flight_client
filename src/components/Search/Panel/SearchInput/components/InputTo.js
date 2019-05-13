import React, { Fragment } from 'react';
import Downshift from 'downshift';

import InputBase from '@material-ui/core/InputBase';
import InputAdornment from '@material-ui/core/InputAdornment';
import List from '@material-ui/core/List';

import ListItemCity from './ListItemCity';
import ListItemAirports from './ListItemAirports';

import { useStyles } from '../hooks/useStyle';
import { checkIndex } from '../../../../../utils/indexCheck';
import { config } from '../../../../../config';

const InputTo = ({ onUserAction, to, result }) => {
	const classes = useStyles();

	return (
		<Downshift
			onUserAction={onUserAction('to')}
			inputValue={to.name ? to.name : to}
			itemToString={item => (!item ? '' : item.name)}>
			{({ getInputProps, getItemProps, isOpen, inputValue, highlightedIndex }) => (
				<div className={classes.search}>
					<InputBase
						{...getInputProps({
							value: inputValue,
							endAdornment: (
								<InputAdornment position="end" className={classes.to}>
									<span className={classes.code}>{to.code}</span>
								</InputAdornment>
							),
							placeholder: 'To',
							className: `${classes.input} ${classes.inputLeft}`
						})}
					/>
					{isOpen && (
						<List className={classes.root} component="nav">
							{result.map((item, index) => {
								if (item && item.flightable === null && item.airports.length > 0) {
									return (
										<Fragment key={item._id}>
											<ListItemCity
												item={item}
												{...getItemProps({
													item,
													selected: checkIndex(result, item) === highlightedIndex,
													button: true,
													divider: true,
													className: classes.city
												})}
											/>

											{item.airports.length > 1 &&
												item.airports.map(
													(airport, index) =>
														index < config.search.airportLimit && (
															<ListItemAirports
																airport={airport}
																{...getItemProps({
																	item: airport,
																	key: airport.code,
																	selected:
																		checkIndex(result, airport) ===
																		highlightedIndex,
																	button: true,
																	divider: true
																})}
															/>
														)
												)}
										</Fragment>
									);
								}
								return null;
							})}
						</List>
					)}
				</div>
			)}
		</Downshift>
	);
};

InputTo.displayname = 'InputTo';

export default InputTo;
