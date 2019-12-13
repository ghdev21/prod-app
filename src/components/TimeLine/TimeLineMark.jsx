import React from 'react';

import classes from './TimeLine.module.scss';

export default ({ text, leftShift, markOpts }) => {
  const additionalClass = markOpts ? classes[markOpts] : classes.ShiftedMark;
  const classNames = [classes.TimeLineMark, additionalClass];
  return (
    <p className={classNames.join(' ')} style={{ left: leftShift }}>
      <span>{text}</span>
    </p>
  );
};
