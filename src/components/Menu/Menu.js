import React, { useContext } from 'react';
import Drawer from '@material-ui/core/Drawer';

import Context from '../../context';

import MenuList from './MenuList';

const Menu = () => {
  const { state, dispatch } = useContext(Context);
  const { header } = state;

  const toggleDrawer = open => () => {
    dispatch({ type: 'TOGGLE_HEADER_MENU', payload: open });
  };

  return (
    <div>
      <Drawer open={header.menu.isOpen} onClose={toggleDrawer(false)}>
        <div
          tabIndex={0}
          role="button"
          onClick={toggleDrawer(false)}
          onKeyDown={toggleDrawer(false)}
          >
          <MenuList />
        </div>
      </Drawer>
    </div>
  );
};

export default Menu;
