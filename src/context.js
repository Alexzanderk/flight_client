import { createContext } from 'react';

const Context = createContext({
  currentUser: null,
  isAuth: false,
  header: {
    menu: {
      isOpen: false
    }
  },
  flight: {
    searchOptions: {
      from: '',
      to: '',
      startDate: null,
      endDate: null,
      oneSide: false,
      adult: 1,
      child: 0,
      baby: 0,
      flightClass: 'econom'
    }
  }
});

export default Context;
