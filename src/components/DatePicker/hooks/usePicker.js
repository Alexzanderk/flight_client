import React from 'react';
import InputBase from '@material-ui/core/InputBase';
import InputAdornment from '@material-ui/core/InputAdornment';
import IconButton from '@material-ui/core/IconButton';
import Clear from '@material-ui/icons/Clear';
import CalendarToday from '@material-ui/icons/CalendarToday';

import Picker from '../components/Picker';
import NoNeedBack from '../components/NoNeedBackTicket';

import useDatePicker from './useDatePicker';

const usePicker = () => {
  const {
    startDateString,
    endDateString,
    startDate,
    openStart,
    openEnd,
    endDateSelected,
    focusedInput,
    _handleClickInputStart,
    _handleClickInputEnd,
    _handleClickClearButton,
    _handleChangeStartDate,
    _handleOnFocusChange,
    _handleDateHighlighted,
    _handleChangeEndDate,
    _handleOutsideClickStartDate,
    _handleOutsideClickEndDate,
    _handleOutsideRangeEndDate
  } = useDatePicker();

  const StartInput = ({ classes }) => (
    <InputBase
      readOnly
      value={startDateString || ''}
      className={`${classes.input} ${classes.inputLeft}`}
      placeholder="Start"
      onClick={_handleClickInputStart}
      endAdornment={
        <InputAdornment position="end">
          <IconButton color="primary" aria-label="Back date">
            <CalendarToday />
          </IconButton>
        </InputAdornment>
      }
    />
  );

  const EndInput = ({classes}) => (
    <InputBase
    readOnly
    value={endDateString || ''}
    className={`${classes.input} ${classes.inputRight}`}
    placeholder="Back"
    endAdornment={
      <InputAdornment position="end">
        <IconButton
          aria-label="Back date"
          onClick={_handleClickClearButton}>
          <Clear />
        </IconButton>
      </InputAdornment>
    }
    inputProps={{
      onClick: _handleClickInputEnd
    }}
  />
  )

  const StartPicker = () => (
    <Picker
      startDate={startDate}
      endDate={endDateSelected}
      withPortal={false}
      onDatesChange={_handleChangeStartDate}
      onFocusChange={_handleOnFocusChange}
      focusedInput={focusedInput}
      onOutsideClick={_handleOutsideClickStartDate}
      isDayHighlighted={_handleDateHighlighted}
      hideKeyboardShortcutsPanel
    />
  );

  const EndPicker = () => (
    <Picker
      startDate={startDate}
      endDate={endDateSelected}
      withPortal={false}
      onDatesChange={_handleChangeEndDate}
      onFocusChange={_handleOnFocusChange}
      focusedInput={focusedInput}
      isOutsideRange={_handleOutsideRangeEndDate}
      isDayHighlighted={_handleDateHighlighted}
      onOutsideClick={_handleOutsideClickEndDate}
      hideKeyboardShortcutsPanel
      calendarInfoPosition="top"
      renderCalendarInfo={() => <NoNeedBack clear={_handleClickClearButton} />}
    />
  );

  return {
    StartPicker,
    EndPicker,
    StartInput,
    EndInput,
    // startDateString,
    // endDateString,
    openStart,
    openEnd,
    // _handleClickInputStart,
    // _handleClickInputEnd,
    // _handleClickClearButton
  };
};

export default usePicker;
