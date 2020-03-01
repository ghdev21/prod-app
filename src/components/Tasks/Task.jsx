import React from 'react';
import checkIsOverdue from '../../helpers/checkIsOverdue';
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

  if (checkIsOverdue(dateNow, deadlineDate)) {
    additionalClass.push(classes.Overdue);
  }

  const dateBlockContent = (
    !taskData.isDaily
      ? (
        <>
          <span>{day}</span>
          <span className={classes.Month}>{month}</span>
        </>
      )
      : <span className={classes.Today}>today</span>
  );

  const taskClasses = taskData.done
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
          !taskData.isDaily || !taskData.done
          && <button
            className={`${classes.TaskButton} icon-arrows-up`}
            onClick={() => onMoveToDaily(id, taskData)}
          />
        }
        {!taskData.done
          && <button
            className={`${classes.TaskButton} icon-edit`}
            onClick={() => onEditTask({ ...taskData, fireBaseId: id })}
          />
        }
      </p>
      <button
        disabled={taskData.done}
        className={`${classes.Priority} ${classes[taskData.priority]}`}
      >
        <span className={`${classes.TomatoIcon} icon-tomato`}/>
        <span className={classes.Estimation}>{taskData.estimation}</span>
      </button>
    </div>
  );
};
