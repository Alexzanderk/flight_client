import React from 'react';

import ListItem from '@material-ui/core/ListItem';
import Typography from '@material-ui/core/Typography';

import { useStyles } from '../hooks/useStyle';

const ListItemCity = ({ item, ...props }) => {
	const classes = useStyles();

	return (
		<ListItem className={classes.city} {...props}>
			<Typography noWrap className={classes.name} component="span" variant="inherit">
				{`${item.name}, `} 
				<Typography noWrap className={classes.country} component="span" variant="caption">
					{item.country.name}
				</Typography>
			</Typography>
			<Typography className={classes.code} component="span" variant="subtitle2">
				{item.code}
			</Typography>
		</ListItem>
	);
};

export default ListItemCity;
