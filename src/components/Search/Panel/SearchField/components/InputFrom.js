import React, { Fragment } from 'react';
import Downshift from 'downshift';

import InputBase from '@material-ui/core/InputBase';
import List from '@material-ui/core/List';
import FromToIcon from '@material-ui/icons/SwapHoriz';
import InputAdornment from '@material-ui/core/InputAdornment';
import IconButton from '@material-ui/core/IconButton';

import ListItemCity from './ListItemCity';
import ListItemAirports from './ListItemAirports';

import { useStyles } from '../useStyle';
import { checkIndex } from '../../../../../utils/indexCheck';

const InputFrom = ({ handleChangeDirection, onUserAction, from, result }) => {
	const classes = useStyles();

	return (
		<Downshift
			onUserAction={onUserAction('from')}
			inputValue={from.name ? from.name : from}
			itemToString={item => (!item ? '' : item.name)}>
			{({ getInputProps, getItemProps, isOpen, inputValue, highlightedIndex }) => (
				<div className={classes.search}>
					<InputBase
						{...getInputProps({
							value: inputValue,
							endAdornment: (
								<InputAdornment position="end" className={classes.from}>
									<span className={classes.code}>{from.code}</span>
									<IconButton onClick={handleChangeDirection}>
										<FromToIcon />
									</IconButton>
								</InputAdornment>
							),
							placeholder: 'From',
							className: `${classes.input} ${classes.inputLeft}`
						})}
					/>
					{isOpen && (
						<List className={classes.root} component="nav">
							{result.map(item => {
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
												item.airports.map((airport, index) => (
													<ListItemAirports
														airport={airport}
														{...getItemProps({
															item: airport,
															key: airport.code,
															selected: checkIndex(result, airport) === highlightedIndex,
															button: true,
															divider: true
														})}
													/>
												))}
										</Fragment>
									);
								}
							})}
						</List>
					)}
				</div>
			)}
		</Downshift>
	);
};

InputFrom.displayname = 'InputFrom';

export default InputFrom;
