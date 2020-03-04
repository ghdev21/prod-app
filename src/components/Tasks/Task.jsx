import React from 'react';
import isOverdue from '../../helpers/isOverdue';
import getTaskListConstants from '../../helpers/getTaskListConstants';
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

export default ({id, taskData, onEditTask, onMoveToDaily}) => {
  const deadlineDate = new Date(taskData.deadline);
  const day = deadlineDate.getDate();
  const month = months[deadlineDate.getMonth()];
  const dateNow = new Date();
  const additionalClass = [classes.Date];
  const { IS_DAILY_LIST, IS_DONE_LIST ,IS_GLOBAL_LIST } = getTaskListConstants(taskData);

  if (isOverdue(dateNow, deadlineDate)) {
    additionalClass.push(classes.Overdue);
  }

  const dateBlockContent = (
    !IS_DAILY_LIST
      ? (
        <>
          <span>{day}</span>
          <span className={classes.Month}>{month}</span>
        </>
      )
      : <span className={classes.Today}>today</span>
  );

  const taskClasses = IS_DONE_LIST
    ? `${classes.Task} ${classes.Category} ${classes[taskData.category]} ${classes.Done}`
    : `${classes.Task} ${classes.Category} ${classes[taskData.category]}`;

  return (
    <div className={taskClasses}>
      <p className={additionalClass.join(' ')}>
        {dateBlockContent}
      </p>
      <p className={classes.TaskInfo}>
        <span className={classes[taskData.priority]}>{taskData.title}</span>
        <span>{taskData.description}</span>
      </p>
      <p className={classes.TaskButtons}>
        {
          IS_GLOBAL_LIST
          && <button
            className={`${classes.TaskButton} icon-arrows-up`}
            onClick={() => onMoveToDaily(id, taskData)}
          />
        }
        {
          !IS_DONE_LIST
          && <button
            className={`${classes.TaskButton} icon-edit`}
            onClick={() => onEditTask({ ...taskData, fireBaseId: id })}
          />
        }
      </p>
      <button
        disabled={IS_DONE_LIST}
        className={`${classes.Priority} ${classes[taskData.priority]}`}
      >
        <span className={`${classes.TomatoIcon} icon-tomato`}/>
        <span className={classes.Estimation}>{taskData.estimation}</span>
      </button>
    </div>
  );
};
