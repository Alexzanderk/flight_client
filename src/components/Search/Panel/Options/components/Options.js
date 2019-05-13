import React, { useState, useContext } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import Divider from '@material-ui/core/Divider';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Typography from '@material-ui/core/Typography';

import Counter from './Counter';
import Context from '../../../../../context';

const Options = ({ classes }) => {
  const [open, setOpen] = useState(null);
  const { state, dispatch } = useContext(Context);
  const { flightClass, adult, child, baby } = state.flight.searchOptions;

  const handleOpen = e => {
    setOpen(e.currentTarget);
  };
  const handleClose = () => {
    setOpen(null);
  };

  return (
    <>
      <Button
        className={classes.button}
        variant="outlined"
        color="primary"
        aria-owns={open ? 'options' : undefined}
        aria-haspopup="true"
        onClick={handleOpen}>
        {`${adult + child + baby} qty, ${
          flightClass === 'first' ? 'First class' : flightClass
        }`}
      </Button>

      <Menu
        variant="menu"
        id="options"
        anchorEl={open}
        open={Boolean(open)}
        onClose={handleClose}>
        <div className={classes.select}>
          <Counter name="adult" />
          <Counter name="child" />
          <Counter name="baby" />
        </div>

        <Divider variant="middle" />

        <Typography
          className={classes.title}
          align="center"
          component="p"
          variant="overline"
          color="secondary">
          Choise class
        </Typography>

        <RadioGroup
          className={classes.menuItem}
          aria-label="position"
          name="position"
          value={flightClass}
          onChange={({ target }) => {
            dispatch({
              type: 'SET_FLIGHT_CLASS',
              payload: target.value
            });
          }}>
          <FormControlLabel
            value="econom"
            control={<Radio color="primary" />}
            label="Econom"
          />
          <FormControlLabel
            value="comfort"
            control={<Radio color="primary" />}
            label="Comfort"
          />
          <FormControlLabel
            value="business"
            control={<Radio color="primary" />}
            label="Business"
          />
          <FormControlLabel
            value="first"
            control={<Radio color="primary" />}
            label="First class"
          />
        </RadioGroup>
      </Menu>
    </>
  );
};

const style = theme => ({
  button: {
    background: '#fff',
    border: `2px solid ${theme.palette.primary.dark}`,
    color: theme.palette.primary.dark,
    marginLeft: -1,
    borderRadius: 0,
    fontSize: '16px',
    width: 210,
    '&:hover': {
      background: '#fff',
      border: `2px solid ${theme.palette.primary.dark}`
    }
  },
  menuItem: {
    padding: 20,
    paddingTop: 0
    // width: 400,
    // background: '#ccc'
  },
  title: {
    marginTop: 15
  },
  select: {
    padding: 20
  }
});

export default withStyles(style)(Options);
