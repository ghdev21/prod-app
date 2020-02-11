import React from 'react';
import classes from './Task.module.scss';

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

export default (props) => {
  const date = new Date(props.deadline);
  const day = date.getDate();
  const month = months[date.getMonth()];

  return (
    <div className={`${classes.Task} ${classes.Category} ${classes[props.category]}`}>
      <p className={classes.Date}>
        <span>{day}</span>
        <span className={classes.Month}>{month}</span>
      </p>
      <p className={classes.TaskInfo}>
        <span className={classes[props.priority]}>{props.title}</span>
        <span>{props.description}</span>
      </p>
      <p className={classes.TaskButtons}>
        <button className={`${classes.TaskButton} icon-arrows-up`} />
        <button className={`${classes.TaskButton} icon-edit`} onClick={() => props.edit(props)} />
      </p>
      <div className={`${classes.Priority} ${classes[props.priority]}`}>
        <span className={`${classes.TomatoIcon} icon-tomato`} />
        <span className={classes.Estimation}>{props.estimation}</span>
      </div>
    </div>
  );
};
