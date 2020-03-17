import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PlusBtn from '../../AddTask/PlusBtn';
import * as action from '../../../store/actions';
import classes from './Button.module.scss';

export default (props) => {
  const dispatch = useDispatch();
  const { isDeleteMode, shouldBeDeleteItems } = useSelector(state => state.taskList);
  const trashBtnClasses = isDeleteMode ? `${classes.TaskListButton} ${classes.Active}` : classes.TaskListButton;
  const handler = (counter, isDeleteMode) => {
    const actionToExecute = counter && isDeleteMode ? action.showDeleteConfirmation() : action.enableDeleteMode();
    dispatch(actionToExecute);
  };

  return (
    <ul className={classes.TaskListButtons}>
      {
        props.fixed
        && (
          <li className={classes.TaskListItem}>
            <PlusBtn showModal={() => dispatch(action.openTaskListModal())} />
          </li>
        )
      }
      <li className={`${classes.TaskListItem} ${classes.TrashItem}`}>
        <button
          className={trashBtnClasses}
          onClick={() => handler(shouldBeDeleteItems.length, isDeleteMode)}
        >
          {
            shouldBeDeleteItems.length
              ? <span className={classes.TrashCounter}>{shouldBeDeleteItems.length}</span>
              : null
          }
          <span className="icon-trash" />
        </button>
      </li>
    </ul>
  );
};
