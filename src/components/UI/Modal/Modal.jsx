import React from 'react';
import Backdrop from '../Backdrop/Backdrop';
import classes from './Modal.module.scss';

export default ({ children }) => (
  <div className={classes.Container}>
    <Backdrop />
    <div className={classes.Modal}>
      {children}
    </div>
  </div>
);
