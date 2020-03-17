import React from 'react';
import classes from '../Task.module.scss';
import isOverdue from '../../../helpers/isOverdue';

const months = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
];

export default ({ isDaily, deadline, dateNow }) => {
  const day = deadline.getDate();
  const month = months[deadline.getMonth()];
  const dateClasses = [classes.Date];

  if (isOverdue(dateNow, deadline)) {
    dateClasses.push(classes.Overdue);
  }

  return (
    <p className={dateClasses.join(' ')}>
      {
        isDaily
          ? (
            <>
              <span>{day}</span>
              <span className={classes.Month}>{month}</span>
            </>
          )
          : <span className={classes.Today}>today</span>
      }
    </p>
  );
};
