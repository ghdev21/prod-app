import React from 'react';

import classes from './AddTaskBtn.module.scss';

export default ({ showModal }) => (
  <button onClick={showModal} className={classes.Button}>
    <span className="icon-add" />
  </button>
);