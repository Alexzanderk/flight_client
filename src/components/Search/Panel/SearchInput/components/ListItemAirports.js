import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import FlightTakeoffIcon from '@material-ui/icons/FlightTakeoff';
import Typography from '@material-ui/core/Typography';

import { useStyles } from '../hooks/useStyle';
const ListItemAirports = ({ airport, ...props }) => {
	const classes = useStyles();

	return (
		<ListItem {...props} className={classes.airport}>
			<FlightTakeoffIcon className={classes.icon} />
			<Typography className={classes.name} noWrap component="span" variant="inherit">
				{airport.name}
			</Typography>
			<Typography className={classes.code} component="span" variant="inherit">
				{airport.code}
			</Typography>
		</ListItem>
	);
};

export default ListItemAirports;
