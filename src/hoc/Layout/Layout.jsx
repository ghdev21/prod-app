import React from 'react';
import { withRouter } from 'react-router-dom';
import Header from '../../containers/Header/Header';
import classes from './Layout.module.scss';
import Router from '../../router/Router';

export default withRouter((props) => (
  <div className={classes.Layout}>
    <Header />
    <main>
      <Router />
    </main>
  </div>
));
