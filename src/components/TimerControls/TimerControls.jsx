import React from 'react';
import createTimerButtons from '../../helpers/createTimerButtons';
import classes from './TimerControls.module.scss';

export default (props) => (
  <div className={classes.Wrapper}>
    {createTimerButtons(props)}
  </div>
);