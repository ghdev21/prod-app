import React from 'react';

import { connect } from 'react-redux';
import TaskFormField from './TaskFormField';
import Spinner from '../UI/Spinner/Spinner';
import classes from './TaskForm.module.scss';
import * as action from '../../store/actions';

const TaskForm = React.memo(({
  onCLoseTaskListModal,
  taskList,
  onStartSaveTask,
}) => {
  const { taskFormOpts } = taskList;

  const cancelHandler = (evt) => {
    evt.preventDefault();
    onCLoseTaskListModal();
  };
  const saveHandler = (evt) => {
    evt.preventDefault();
    onStartSaveTask(taskFormOpts);
  };

  const modalContent = (
    <>
      <h3 className={classes.AddTaskTitle}>Add Task</h3>
      {taskFormOpts.map((field) => (
        <TaskFormField
          key={field.labelName}
          {...field}
        />
      ))}
      <div className={classes.ButtonsWrapper}>
        <button className={`${classes.Button} icon-close`} onClick={cancelHandler} />
        <button className={`${classes.Button} icon-check`} onClick={saveHandler} />
      </div>
    </>
  );

  return (
    <form className={classes.Form}>
      {taskList.loading
        ? <Spinner />
        : modalContent}
    </form>
  );
});

const mapStateToProps = ({ taskList }) => ({
  taskList,
});

const mapDispatchToProps = (dispatch) => ({
  onCLoseTaskListModal: () => dispatch(action.onCLoseTaskListModal()),
  onStartSaveTask: (data) => dispatch(action.onStartSaveTask(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TaskForm);
