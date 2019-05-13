import React from 'react';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import AirplaneIcon from '@material-ui/icons/AirplanemodeActive';

import DatePickerWithInputs from '../DatePicker/components/DatePickerWithInputs';
import Options from './Panel/Options';
import SearchFields from './Panel/SearchFields';

const SearchPanel = ({ classes, ...props }) => {
    return (
        <div className={classes.root}>
            <Typography className={classes.title} component="h1" variant="h3">
                Let's find the best tickets
            </Typography>
            <div className={classes.container}>
                <SearchFields />
                <DatePickerWithInputs />
                <Options />
            </div>

            <Button
                className={classes.button}
                color="secondary"
                variant="contained"
                size="large">
                Let's Find The Chipest Tickets
                <AirplaneIcon className={classes.planeIcon} />
            </Button>
        </div>
    );
};

const style = theme => ({
    root: {
        flex: 1,
        flexGrow: 1,
        display: 'flex',
        flexFlow: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        background: theme.palette.primary.main
    },
    container: {
        display: 'flex'
    },
    title: {
        color: '#fff',
        marginBottom: 25
    },
    button: {
        fontSize: 22,
        marginTop: 50,
        fontWeight: 800,
        color: '#fff'
    },
    planeIcon: {
      transform: 'rotate(90deg)',
      fontSize: 32,
    }
});

export default withStyles(style)(SearchPanel);
