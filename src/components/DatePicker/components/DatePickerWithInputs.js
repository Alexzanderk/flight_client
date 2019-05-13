import React from 'react';
import { withStyles } from '@material-ui/core/styles';

import usePicker from '../hooks/usePicker';

const DatePickerWithInputs = ({ classes }) => {
  const {
    StartPicker,
    EndPicker,
    StartInput,
    EndInput,
    openStart,
    openEnd
  } = usePicker();

  const Start = () => (
    <div className={classes.start}>
      <StartInput classes={classes} />

      {openStart && (
        <div className={classes.datepicker}>
          <StartPicker />
        </div>
      )}
    </div>
  );

  const End = () => (
    <div className={classes.end}>
      <EndInput classes={classes} />

      {openEnd && (
        <div className={classes.datepicker}>
          <EndPicker />
        </div>
      )}
    </div>
  );

  return (
    <div className={classes.root}>
      <Start />
      <End />
    </div>
  );
};

const datepickerStyles = theme => ({
  root: {
    display: 'flex'
  },
  start: {
    position: 'relative',
    // width: '100%',
    // background: '#fff',
    zIndex: 100,
    // height: '100%',
  },
  end: {
    position: 'relative',
    // width: '100%',
    // background: '#fff',
    zIndex: 10,
    // height: '100%',
  },
  datepicker: {
    position: 'absolute',
    top: 2,
    left: 1,
    width: '100%'
  },
  input: {
    borderColor: theme.palette.primary.dark,
    border: '2px solid',
    padding: 10,
    fontSize: 20,
    background: '#fff',
    color: theme.palette.primary.dark,
    maxWidth: 190
  },
  inputLeft: {
    marginRight: -1,
    marginLeft: -1
  },
  inputRight: {
    marginLeft: -1,
    marginRight: -1
  }
});

export default withStyles(datepickerStyles)(DatePickerWithInputs);
