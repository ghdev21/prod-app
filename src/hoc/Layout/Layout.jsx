import React from 'react';
import { withRouter } from 'react-router-dom';
import Router from '../../router/Router';
import Header from '../../containers/Header/Header';
import classes from './Layout.module.scss';

export default withRouter(() => (
  <>
    <Header />
    <main className={classes.Layout}>
      <Router />
    </main>
  </>
));
