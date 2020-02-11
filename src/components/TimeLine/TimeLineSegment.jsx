import React from 'react';

import classes from './TimeLine.module.scss';

export default ({ segment, size }) => {
  let currentClass = null;
  switch (segment) {
    case ('work'):
      currentClass = classes.WorkIteration;
      break;
    case ('shortBreak'):
      currentClass = classes.ShortBreak;
      break;
    default:
      currentClass = classes.LongBreak;
  }

  return (
    (
      <div
        className={currentClass}
        style={{ width: `${size}%` }}
      />
    )
  );
};
