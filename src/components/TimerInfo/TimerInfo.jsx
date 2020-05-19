import React from 'react';
import PageHeading from '../PageHeading/PageHeading';
import Pomodoro from '../Pomodoro/Pomodoro';
import classes from './TimerInfo.module.scss';

export default ({ task }) => task && (
  <div className={classes.TimerInfo}>
    <PageHeading title={`1. ${task.title}`} />
    <p className={classes.TaskDescription}>
      {task.description}
    </p>
    <Pomodoro estimation={task.estimation} />
  </div>
);
