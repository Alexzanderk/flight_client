import React, { useContext } from 'react';
import Divider from '@material-ui/core/Divider';
import EditIcon from '@material-ui/icons/Edit';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/styles';

import Context from '../../context';

const MenuProfile = () => {
  const classes = useStyles();
  const { state } = useContext(Context);
  const { currentUser } = state;

  return (
    <>
      <div className={classes.profile}>
        <Avatar
          className={classes.avatar}
          src={currentUser && currentUser.picture}
        />
        <Typography
          className={classes.displayName}
          component="h6"
          variant="h6"
          align="center">
          {currentUser && currentUser.name}
        </Typography>
        <IconButton onClick={() => console.log('click')}>
          <EditIcon className={classes.editButton} />
        </IconButton>
      </div>
      <Divider />
    </>
  );
};

const useStyles = makeStyles({
  avatar: {
    width: 40,
    height: 40
  },
  profile: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10
  },
  displayName: {
    marginRight: 'auto',
    marginLeft: 10
  },
  editButton: {
    fontSize: 18
  }
});

export default MenuProfile;
