import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import PlusBtn from '../../AddTask/PlusBtn';
import * as action from '../../../store/actions';
import classes from './Button.module.scss';

export default (props) => {
  const dispatch = useDispatch();
  const showModal = useCallback(() => dispatch(action.openTaskListModal()), [dispatch]);

  return (
    <ul className={classes.TaskListButtons}>
      {
        props.fixed
        && (
          <li className={classes.TaskListItem}>
            <PlusBtn showModal={showModal} />
          </li>
        )
      }
      <li className={classes.TaskListItem}>
        <button className={`${classes.TaskListButton}`}>
          <span className="icon-trash" />
        </button>
      </li>
    </ul>
  );
};
