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
          onClick={() => handler(item)}
        >
          <button className={isActive}>{item}</button>
        </li>
      );
    })}
  </ul>
);
