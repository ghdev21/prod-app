import React, {FC} from 'react';
import PageHeading from '../PageHeading/PageHeading';
import Pomodoro from '../Pomodoro/Pomodoro';
import classes from './TimerInfo.module.scss';

interface ITimerInfo {
    task: Timer.Task
}

export const TimerInfo:FC <ITimerInfo> = ({ task }) => task && (
  <div className={classes.TimerInfo}>
    <PageHeading title={`1. ${task.title}`} />
    <p className={classes.TaskDescription}>
      {task.description}
    </p>
    <Pomodoro estimation={task.estimation} />
  </div>
);
