import React from 'react';
import { DayPickerRangeController } from 'react-dates';
import ThemedStyleSheet from 'react-with-styles/lib/ThemedStyleSheet';
import aphroditeInterface from 'react-with-styles-interface-aphrodite';
import theme from '../utils/ThemeDatePicker';

import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';

import { defaultProps } from '../utils/datepickerDefaultProps';

ThemedStyleSheet.registerInterface(aphroditeInterface);
ThemedStyleSheet.registerTheme(theme);
const Picker = restProps => {
  const {
    autoFocus,
    autoFocusEndDate,
    initialStartDate,
    initialEndDate,
    showInputs,
    ...props
  } = restProps;

  return <DayPickerRangeController {...props} />;
};

Picker.defaultProps = defaultProps;

export default Picker;
