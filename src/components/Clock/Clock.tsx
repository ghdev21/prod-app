import React, {FC} from 'react';
import classes from './Clock.module.scss';

interface IClock {
    mode: string,
    time: number | 0,
    executionQueue: number
}

export const Clock:FC<IClock> = ({ mode, time, executionQueue }) => {
  const timeInSeconds = time * 60;

  return (
    <div className={classes.Wrapper}>
      <div className={classes.Clock}>

        <div className={classes.Overlay}>
          {executionQueue > 0
            ? (
              <div className={classes.Text}>
                {time}
                min
              </div>
            )
            : <h3 className={classes.Text}>Let's do it</h3>}
        </div>
        {mode
        && (
          <div className={classes.wrapper} style={{ animationDuration: `${timeInSeconds}s` }}>
            <div className={`${classes.Pie} ${classes.Spinner}`} />
            <div className={`${classes.Pie} ${classes.Filler}`} />
            <div className={classes.Mask} />
          </div>
        )}
      </div>
    </div>
  );
};
