import React, {FC} from 'react';
import {createTimerButtons} from '../../helpers/createTimerButtons';
import classes from './TimerControls.module.scss';

export interface ITimerControls {
    mode: string,
    start: () => void,
    finish: () => void,
}

export const TimerControls:FC<ITimerControls> = (props) => (
  <div className={classes.Wrapper}>
    {createTimerButtons(props)}
  </div>
);