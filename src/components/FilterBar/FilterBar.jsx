import React from 'react';
import classes from './FilterBar.module.scss';

export default ({ marks, activeElement, handler }) => (
  <ul className={classes.FilterList}>
    {marks.map(item => {
      const isActive = item === activeElement
        ? `${classes.FilterButton} ${classes.Active}`
        : classes.FilterButton;

      return (
        <li
          className={classes.FilterItem}
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
