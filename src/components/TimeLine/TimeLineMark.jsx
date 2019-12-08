import React from 'react';

import classes from './TimeLine.module.scss';

export default ({ text, leftShift, markOpts }) => {
  const styles = { left: leftShift, position: 'relative' };
  const classNames = [classes.TimeLineMark];
  if (markOpts) {
    classNames.push(classes[markOpts]);
  } else {
    styles.transform = 'translateX(-50%)';
    styles.position = 'absolute';
  }
  return (
    <p className={classNames.join(' ')} style={styles}>
      <span>{text}</span>
    </p>
  );
};
