import React from 'react';
// import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';

import withRoot from '../withRoot';
import SearchPanel from '../components/Search/Search';
import Header from '../components/shared/Header';

const Find = ({ classes }) => (
  <div className={classes.root}>
    <Header />
    <SearchPanel />
  </div>
);

const style = theme => ({
  root: {
    minHeight: '100vh',
    display: 'flex',
    flexFlow: 'column'
  }
});

export default withStyles(style)(withRoot(Find));
