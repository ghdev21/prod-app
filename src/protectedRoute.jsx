import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import auth from './auth';

export default ({ component: Component, ...rest }) => (
  <Route {...rest}
    render={(props) => (auth.authentificated
      ? <Component {...props} />
      : <Redirect to="/" />)}
  />
);
