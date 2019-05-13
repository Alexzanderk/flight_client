import React, { useContext } from 'react';
import { GoogleLogin } from 'react-google-login';
import { GraphQLClient } from 'graphql-request';

import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';

import Context from '../../context';
import { ME_QUERY } from '../../graphql/queries';

const Login = ({ classes }) => {
  const { dispatch } = useContext(Context);

  const onSuccess = async googleUser => {
    try {
      const idToken = googleUser.getAuthResponse().id_token;
      const client = new GraphQLClient('http://localhost:5000/graphql', {
        headers: { authorization: idToken }
      });

      const { me } = await client.request(ME_QUERY);

      dispatch({ type: 'LOGIN', payload: me });
      dispatch({
        type: 'IS_LOGGED_IN',
        payload: googleUser.isSignedIn()
      });
    } catch (error) {
      onFailure(error);
    }
  };

  const onFailure = err => {
    console.error('Error logging in', err);
  };

  return (
    <GoogleLogin
      clientId="352722871377-gonr68hod0gdlg5aj4a38hqhtcl2d78n.apps.googleusercontent.com"
      onSuccess={onSuccess}
      onFailure={onFailure}
      isSignedIn={true}
      theme="dark"
      render={props => (
        <Button {...props} variant="text" className={classes.button}>
          Login with Google
        </Button>
      )}
    />
  );
};

const style = theme => ({
  button: {
    color: theme.palette.secondary.light,
    fontWeight: 600,
  }
});

export default withStyles(style)(Login);
