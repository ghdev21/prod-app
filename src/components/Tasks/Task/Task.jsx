import React from 'react';
import { useHistory } from 'react-router-dom';
import getTaskListConstants from '../../../helpers/getTaskListConstants';
import classes from '../Task.module.scss';
import DateBlock from './DateBlock';

export default (props) => {
  const { id, taskData, onEditTask, onUpdateTrashItem, onMoveToDaily, taskList } = props;
  const { shouldBeDeleteItems, isDeleteMode} = taskList;
  const { IS_DAILY_LIST, IS_DONE_LIST, IS_GLOBAL_LIST } = getTaskListConstants(taskData);
  const history = useHistory();
  const isSelected = shouldBeDeleteItems.includes(id);
  const deleteMode = isDeleteMode ? classes.DeleteMode : '';
  const defaulClasses = [classes.Task, classes.Category, classes[taskData.category], deleteMode];
  const taskClasses = IS_DONE_LIST
    ? [...defaulClasses, classes.Done]
    : defaulClasses;

  return (
    <div className={taskClasses.join(' ')}>
      <div className={classes.RightSide}>
        {isDeleteMode
          ? <button
            className={`${classes.DeleteButton} ${isSelected ? classes.Selected : ''} icon-trash`}
            onClick={() => onUpdateTrashItem([id], isSelected)}
          />
          : <DateBlock
            isDaily={!IS_DAILY_LIST}
            deadline={new Date(taskData.deadline)}
            dateNow={new Date()}
          />}
      </div>
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
            onClick={() => onEditTask({ ...taskData, fireBaseId: { id, taskData } })}
          />
        }
      </p>
      <button
        disabled={IS_DONE_LIST}
        className={`${classes.Priority} ${classes[taskData.priority]}`}
        onClick={() => {
          history.push(`/timer/${id}`);
        }}
      >
        <span className={`${classes.TomatoIcon} icon-tomato`}/>
        <span className={classes.Estimation}>{taskData.estimation}</span>
      </button>
    </div>
  );
};
