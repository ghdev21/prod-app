import React from 'react';
import classes from './Bar.module.scss';

export default ({ marks, activeElement, handler }) => (
  <ul className={classes.List}>
    {marks.map(item => {
      const isActive = item === activeElement
        ? `${classes.ListButton} ${classes.Active}`
        : classes.ListButton;

      return (
        <li
          className={classes.ListItem}
          key={item}
        >
          <button
            className={isActive}
            onClick={() => handler(item)}
          >
            {item}
          </button>
        </li>
      );
    })}
  </ul>
);
