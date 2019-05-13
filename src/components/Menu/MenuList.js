import React, { useContext } from 'react';
import { Link } from '@reach/router';

import { makeStyles } from '@material-ui/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';

import Logout from '../Auth/Logout';
import MenuProfile from './MenuProfile';

import Context from '../../context';

const nav = [
  { name: 'Map', link: '/map', icon: '' },
  { name: 'Find', link: '/find', icon: '' },
  { name: 'History', link: '/history', icon: '' }
];

const MenuList = () => {
  const classes = useStyles();
  const { state } = useContext(Context);
  const { currentUser } = state;

  return (
    <div className={classes.list}>
      {currentUser && <MenuProfile />}

      <List>
        {nav.map((menu, index) => (
          <Link
            className={classes.link}
            to={`/${menu.link.toLowerCase()}`}
            key={index}>
            <ListItem button>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={menu.name} />
            </ListItem>
          </Link>
        ))}

        {currentUser && (
          <ListItem>
            <Logout type="button" />
          </ListItem>
        )}
      </List>
    </div>
  );
};

const useStyles = makeStyles({
  list: {
    width: 250
  },
  fullList: {
    width: 'auto'
  },
  link: {
    textDecoration: 'none',
    color: 'inherit'
  }
});

export default MenuList;
