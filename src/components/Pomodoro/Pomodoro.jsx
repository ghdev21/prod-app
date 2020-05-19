import React from 'react';
import uuid from 'uuid/v1';
import classes from './Pomodoro.module.scss';

export default ({ estimation }) => {
  const countOfIcons = parseInt(estimation, 10);
  return (
    <div className={classes.Wrapper}>
      <ul className={classes.List}>
        {[...Array(countOfIcons)].map((_) => (
          <li className={classes.ListItem} key={uuid()} />
        ))}
      </ul>
      {/*<button className="icon-add" />*/}
    </div>
  );
};
