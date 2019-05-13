import { useState, useEffect, useContext } from 'react';
import Context from '../../../context';
import { getDates } from '../../../utils/getDates';
import { isSameDay, isInclusivelyAfterDay } from 'react-dates';
import moment from 'moment';

const useDatePicker = () => {
  const [openStart, setOpenStart] = useState(false);
  const [openEnd, setOpenEnd] = useState(false);
  const [endDateSelected, setEndDateSelected] = useState(null);
  const [focusedInput, setFocusedInput] = useState('startDate');

  const { state, dispatch } = useContext(Context);
  const { startDate, endDate } = state.flight.searchOptions;

  const datesList = startDate && endDate && getDates(startDate, endDate);

  const startDateString = startDate && startDate.format('YYYY-MM-DD');
  const endDateString = endDate && endDate.format('YYYY-MM-DD');

  useEffect(() => {
    if (startDate && endDateSelected) {
      setEndDateSelected(null);
    }
  }, [endDateSelected, startDate]);

  const _handleClickInputStart = () => {
    setOpenStart(!openStart);
    setFocusedInput('startDate');
  };

  const _handleClickInputEnd = () => {
    setFocusedInput('endDate');
    setOpenEnd(!openEnd);
    setEndDateSelected(null);
  };

  const _handleClickClearButton = () => {
    if (openEnd) {
      setOpenEnd(!openEnd);
    }
    dispatch({
      type: 'SET_END_DATE',
      payload: null
    });
    setEndDateSelected(null);
  };

  const _handleChangeStartDate = ({ startDate, endDate }) => {
    dispatch({ type: 'SET_START_DATE', payload: startDate });
    setOpenStart(!openStart);
    setOpenEnd(!openEnd);
  };

  const _handleOnFocusChange = focuse =>
    setFocusedInput(!focuse ? 'startDate' : focuse);

  const _handleDateHighlighted = day1 =>
    startDate && endDate && datesList.some(day2 => isSameDay(day1, day2));

  const _handleChangeEndDate = ({ startDate, endDate }) => {
    dispatch({
      type: 'SET_END_DATE',
      payload: endDate
    });
    setEndDateSelected(endDate);
    setOpenEnd(!openEnd);
  };

  const _handleOutsideRange = day =>
    !isInclusivelyAfterDay(day, startDate || moment());

  const _handleOutsideClickStartDate = () => setOpenStart(!openStart);

  const _handleOutsideClickEndDate = () => setOpenEnd(!openEnd);

  const _handleOutsideRangeEndDate = day =>
    !isInclusivelyAfterDay(day, startDate || moment());

  return {
    openStart,
    startDate,
    openEnd,
    endDateSelected,
    focusedInput,
    startDateString,
    endDateString,
    _handleClickInputStart,
    _handleClickInputEnd,
    _handleClickClearButton,
    _handleChangeStartDate,
    _handleOnFocusChange,
    _handleDateHighlighted,
    _handleChangeEndDate,
    _handleOutsideRange,
    _handleOutsideClickStartDate,
    _handleOutsideClickEndDate,
    _handleOutsideRangeEndDate
  };
};

export default useDatePicker;
