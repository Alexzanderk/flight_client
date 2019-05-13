import React, { useContext } from 'react';
import { GoogleLogout } from 'react-google-login';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';

import Context from '../../context';

const Logout = ({ classes, type }) => {
  const { dispatch } = useContext(Context);

  const onLogout = () => {
    console.log('logout');
    dispatch({ type: 'LOGOUT' });
  };

  if (type === 'button') {
    return (
      <GoogleLogout
        onLogoutSuccess={onLogout}
        render={props => (
          <Button variant='contained' color='primary' className={classes.button} {...props}>
            Logout
            <ExitToAppIcon className={classes.buttonIcon} />
          </Button>
        )}
      />
    );
  }

  if (type === 'link') {
    return (
      <GoogleLogout
        onLogoutSuccess={onLogout}
        render={props => (
          <Button className={classes.link} {...props}>
            Logout
            <ExitToAppIcon className={classes.buttonIcon} />
          </Button>
        )}
      />
    );
  }

  return (
    <GoogleLogout
      onLogoutSuccess={onLogout}
      render={props => (
        <Button className={classes.link} {...props}>
          Logout
          <ExitToAppIcon className={classes.buttonIcon} />
        </Button>
      )}
    />
  );
};

const style = theme => ({
  link: {
    color: theme.palette.secondary.light,
    marginLeft: 'auto',
    fontWeight: 600
  },
  button: {
    marginLeft: 'auto',
    fontWeight: 600,
    margin: 'auto',
    color: 'white',
    width: '100%'
  },
});

export default withStyles(style)(Logout);
