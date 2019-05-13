import React, { useContext } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import AddIcon from '@material-ui/icons/Add';
import Remove from '@material-ui/icons/Remove';

import { isValid } from '../../../../../utils/validation';
import Context from '../../../../../context';

const Counter = ({ name, classes }) => {
  const { state, dispatch } = useContext(Context);
  const { searchOptions } = state.flight;

  const inc = () => {
    const count = parseFloat(searchOptions[name]) + 1;
    dispatch({
      type: 'INC_COUNT',
      payload: { count, name }
    });
  };

  const dec = () => {
    const count = parseFloat(searchOptions[name]) - 1;
    dispatch({
      type: 'DEC_COUNT',
      payload: { count, name }
    });
  };
  
  const valid = isValid(searchOptions, name);

  return (
    <div className={classes.root}>
      <Typography className={classes.title} component="span" variant="overline">
        {name}
      </Typography>

      <IconButton
        className={classes.inc}
        disabled={valid('inc')}
        size="small"
        color="secondary"
        onClick={inc}>
        <AddIcon fontSize="inherit" />
      </IconButton>
      <Typography component="span" variant="button" className={classes.text}>
        {searchOptions[name]}
      </Typography>
      <IconButton
        disabled={valid('dec')}
        size="small"
        color="secondary"
        onClick={dec}>
        <Remove fontSize="inherit" />
      </IconButton>
    </div>
  );
};

const style = theme => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    alignContent: 'center'
  },
  text: {
    fontWeight: 800
  },
  title: {
    fontWeight: 500,
    marginRight: 5
  },
  inc: {
    marginLeft: 'auto'
  }
});

export default withStyles(style)(Counter);
