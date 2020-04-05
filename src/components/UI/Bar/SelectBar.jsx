import React from 'react';
import classes from './Bar.module.scss';

export default ({ list, onUpdateTrashItem }) => {
  const getIds = list.map(item => item[0]);

  return (
    <ul className={`${classes.List} ${classes.SelectionList}`}>
      <li className={classes.ListItem}>
        <button
          className={classes.ListButton}
          onClick={() => onUpdateTrashItem(getIds, false)}
        >
          Select All
        </button>
      </li>
      <li className={classes.ListItem}>
        <button
          className={classes.ListButton}
          onClick={() => onUpdateTrashItem(getIds, true)}
        >
          Deselect All
        </button>
      </li>
    </ul>
  );
};
