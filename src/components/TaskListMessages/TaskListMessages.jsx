import React from 'react';
import classes from './TaskListMessages.module.scss';
import Button from '../UI/Button/Button';
import checkTaskState from '../../helpers/checkTaskState';

export default ({
  skip,
  redirect,
  str,
  isFirstVisit,
}) => {
  const properties = checkTaskState(str);
  return (
    <>
      <div className={classes.IconWrapper}>
        <img src={properties.icon} alt="Tomato" />
      </div>
      <h2 className={classes.Text}>
        {properties.text}
      </h2>
      {isFirstVisit
        ? (
          <div className={classes.ButtonWrapper}>
            <Button clickHandler={skip} color="Blue">Skip</Button>
            <Button clickHandler={redirect} color="Green">Go to Settings</Button>
          </div>
        )
        : null}
    </>
  );
};
