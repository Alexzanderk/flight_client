import React, { useReducer, useContext } from 'react';
import ReactDOM from 'react-dom';
import { Router } from '@reach/router';

import Context from './context';
import reducer from './reducer';

import Find from './pages/Find';

import * as serviceWorker from './serviceWorker';

const Root = () => {
  const initialState = useContext(Context);
  const [state, dispatch] = useReducer(reducer, initialState);
  const { searchOptions } = state.flight;
  console.log({ ...searchOptions });

  return (
    <Context.Provider value={{ state, dispatch }}>
        <Router>
          <Find path="/" />
        </Router>
    </Context.Provider>
  );
};

ReactDOM.render(<Root />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
