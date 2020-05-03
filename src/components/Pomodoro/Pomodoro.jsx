import React from 'react';
import uuid from 'uuid/v1';
import classes from './Pomodoro.module.scss';

export default ({ estimation }) => {

  return (
    <div className={classes.Wrapper}>
      <ul className={classes.List}>
        {[...Array(parseInt(estimation))].map((_) => (
          <li className={classes.ListItem} key={uuid()} />
        ))}
      </ul>
      {/*<button className="icon-add" />*/}
    </div>
  );
};
