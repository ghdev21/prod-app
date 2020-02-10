import React from 'react';
import classes from './PlusBtn.module.scss';

export default ({ showModal }) => (
  <button onClick={showModal} className={classes.Button}>
    <span className="icon-add" />
  </button>
);
