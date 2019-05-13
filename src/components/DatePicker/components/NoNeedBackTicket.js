import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const CalendarInfo = ({ clear }) => {
  const classes = useStyle();

  return (
    <div className={classes.root}>
      <Button
        color="secondary"
        className={classes.button}
        onClick={clear}
        variant="outlined">
        No need back ticket
      </Button>
    </div>
  );
};

const useStyle = makeStyles({
  root: {
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    zIndex: 10,
    background: '#fff',
    width: '100%',
    height: '100%',
    opacity: 1
  },
  button: {
    margin: 'auto',
    marginTop: 25
  }
});

export default CalendarInfo;
