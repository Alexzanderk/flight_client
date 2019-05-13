import React, { useContext } from 'react';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';
import { Link } from '@reach/router';
import Login from '../Auth/Login';
import Menu from '../Menu/Menu';

import Context from '../../context';

const Header = ({ classes }) => {
  const { state, dispatch } = useContext(Context);

  return (
    <header>
      <AppBar position="fixed">
        <Toolbar className={classes.root}>
          <Link className={classes.link} to="/">
            <Typography
              component="h1"
              variant="h6"
              color="inherit"
              noWrap>
              Find tickets
            </Typography>
          </Link>
          <Menu />
          {!state.isAuth && <Login />}

          <IconButton
            className={classes.button}
            onClick={() =>
              dispatch({ type: 'TOGGLE_HEADER_MENU', payload: true })
            }>
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </header>
  );
};

const style = theme => ({
  root: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  button: {
    color: theme.palette.secondary.light,
    fontWeight: 600
  },
  link: {
    textDecoration: 'none',
    color: 'inherit',
    marginRight: 'auto',
  }
});

export default withStyles(style)(Header);
