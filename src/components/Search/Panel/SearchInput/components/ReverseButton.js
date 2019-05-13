import React from 'react';
import { makeStyles } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import FromToIcon from '@material-ui/icons/SwapHoriz';

const useStyles = makeStyles(theme => ({
  button: {
		position: 'absolute',
		top: '50%',
		left: '49.3%',
    zIndex: 10,
    fontSize: 42,
		transform: 'translate(-50%, -50%)',
  },
  icon: {
    fontSize: 28,
    background: '#fff',
    borderRadius: '50%'
  }

}))

const ReverseButton = ({ handleChangeDirection }) => {
	const classes = useStyles();

	return (
		<IconButton color="secondary" className={classes.button} onClick={handleChangeDirection}>
			<FromToIcon className={classes.icon} />
		</IconButton>
	);
};

ReverseButton.displayname = 'ReverseButton';

export default ReverseButton;
