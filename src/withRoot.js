import React from 'react';
import CssBaseLine from '@material-ui/core/CssBaseline';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { createGlobalStyle } from 'styled-components';
import { blue, amber } from '@material-ui/core/colors';

const GlobalStyle = createGlobalStyle`
  body {font-family: 'Roboto';  background: #ccc; min-height: 100vh;}
`;

const theme = createMuiTheme({
  // overrides: {
  //   // MuiPickersModal: {
  //   //   dialogAction: {
  //   //     display: "none"
  //   //   }
  //   // }
  // },
  typography: {
    useNextVariants: true
  },
  palette: {
    primary: {
      light: blue[300],
      main: blue[500],
      dark: blue[700]
    },
    secondary: {
      light: amber[50],
      main: amber[900],
      dark: amber[900]
    }
    // secondary: {
    //   light: lightBlue[50],
    //   main: lightBlue[100],
    //   dark: lightBlue[900]
    // }
    // type: 'dark'
  }
});
console.log(theme);
// console.log(blue);

const withRoot = Component => {
  const WithRoot = props => {
    return (
      <MuiThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        {/* https://material-ui.com/getting-started/usage/#cssbaseline */}
        <CssBaseLine />
        <GlobalStyle />
        <Component {...props} />
      </MuiThemeProvider>
    );
  };

  return WithRoot;
};

export default withRoot;
