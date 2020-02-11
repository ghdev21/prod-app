import React from 'react';

import classes from './Button.module.scss';

export default ({children, color, clickHandler}) => {
  const classNames = [classes.Button, classes[color]];
  return (
    <button onClick={clickHandler} className={classNames.join(' ')}>
      {children}
    </button>
  );
}