import React from 'react';
import Header from '../../containers/Header/Header';
import classes from './Layout.module.scss';


export default (props) => (
  <div className={classes.Layout}>
    <Header />
    <main>
      {props.children}
    </main>
  </div>
);
