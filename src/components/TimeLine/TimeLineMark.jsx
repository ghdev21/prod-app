import React from 'react';

import classes from './TimeLine.module.scss';

export default ({ text, leftShift, markOpts }) => {
  const classNames = [classes.TimeLineMark];
  const additionalClass = markOpts ? classes[markOpts] : classes.ShiftedMark;
  classNames.push(additionalClass);
  return (
    <p className={classNames.join(' ')} style={{ left: leftShift }}>
      <span>{text}</span>
    </p>
  );
};
