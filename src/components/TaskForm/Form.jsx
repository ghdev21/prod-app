import React from 'react';
import { connect } from 'react-redux';
import uuid from 'uuid/v1';
import * as action from '../../store/actions';
import classes from './Form.module.scss';
import Spinner from '../UI/Spinner/Spinner';
import formButtons from '../../helpers/generateFormButtons';
import TaskFormField from './Field';

const getValueFromField = (data) => {
  const { labelName, value } = data;

  return { [labelName]: value };
};

const Form = ({
  taskList,
  onCloseTaskListModal,
  onStartSaveTask,
  onStartUpdateTask,
  onStartDeleteTask,
}) => {
  const { taskFormOpts, editableTask } = taskList;

  const cancelHandler = () => {
    onCloseTaskListModal();
  };
  const saveHandler = () => {
    const data = taskFormOpts.map(getValueFromField);
    const taskData = data.reduce((obj, nextObj) => ({ ...obj, ...nextObj }));
    const dataToSend = {
      id: uuid(),
      createData: new Date(),
      completeDate: null,
      status: null,
      completedCount: 0,
      failedPomodoros: [],
      isDaily: false,
      done: false,
      ...taskData,
    };

    if (editableTask) {
      onStartUpdateTask(dataToSend, editableTask);
    } else {
      onStartSaveTask(dataToSend);
    }
  };

  const deleteHandler = () => {
    onStartDeleteTask(editableTask);
  };
  const buttons = formButtons(editableTask, [cancelHandler, saveHandler, deleteHandler]);
  const modalContent = (
    <>
      <h3 className={classes.AddTaskTitle}>
        {taskList.editableTask ? 'Edit Task' : 'Add Task'}
      </h3>
      {taskFormOpts.map((field) => (
        <TaskFormField
          key={field.labelName}
          {...field}
        />
      ))}
      <div className={classes.ButtonsWrapper}>
        {buttons.map((item) => (
          <button
            key={item.id}
            className={item.classes}
            onClick={item.handler}
          />
        ))}
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
};

const mapStateToProps = ({ taskList }) => ({
  taskList,
});

const mapDispatchToProps = (dispatch) => ({
  onCloseTaskListModal: () => dispatch(action.closeTaskListModal()),
  onStartSaveTask: (data) => dispatch(action.startSaveTask(data)),
  onStartUpdateTask: (data, id) => dispatch(action.startUpdateTask(data, id)),
  onStartDeleteTask: (id) => dispatch(action.startDeleteTask(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Form);
