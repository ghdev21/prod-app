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
  onSaveTask,
  onUpdateTask,
  onDeleteTask,
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
      isDaily: editableTask && editableTask.taskData.isDaily,
      failedPomodoros: [],
      ...taskData,
    };

    if (editableTask) {
      onUpdateTask({ data: dataToSend, id: editableTask.id });
    } else {
      onSaveTask(dataToSend);
    }
  };

  const deleteHandler = () => {
    onDeleteTask(editableTask.id);
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
  onSaveTask: (data) => dispatch(action.saveTask(data)),
  onUpdateTask: (taskObj) => dispatch(action.updateTask(taskObj)),
  onDeleteTask: (id) => dispatch(action.deleteTask(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Form);
