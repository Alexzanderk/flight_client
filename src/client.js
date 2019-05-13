import { useState, useEffect, useContext } from 'react';
import { GraphQLClient } from 'graphql-request';

import Context from './context';

const url = window.location;
const remote = 'http://192.168.101.118:5000/graphql';
const local = 'http://localhost:5000/graphql';
const mixed = `http://${url.hostname}:5000/graphql`;

export const BASE_URL =
  process.env.NODE_ENV === ' production' ? process.env.GRAPHQL_ENDPOINT : mixed;

export const useClient = () => {
  const { state } = useContext(Context);
  const { currentUser } = state;

  const [idToken, setIdToken] = useState('');

  const gapi = window.gapi;

  useEffect(() => {
    if (currentUser) {
      const token = window.gapi.auth2
        .getAuthInstance()
        .currentUser.get()
        .getAuthResponse().id_token;
      setIdToken(token);
    }
  }, [currentUser, gapi]);

  return new GraphQLClient(BASE_URL, { headers: { authorization: idToken } });
};
