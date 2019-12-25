import React, { useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import AddTaskBtn from '../../components/AddTask/AddTaskBtn';
import PageHeading from '../../components/PageHeading/PageHeading';
import TaskListMessages from '../../components/TaskListMessages/TaskListMessages';
import Spinner from '../../components/UI/Spinner/Spinner';
import Tasks from '../../components/Tasks/Tasks';
import classes from './TaskList.module.scss';
import * as action from '../../store/actions/index';

const TaskList = ({
  history,
  taskList,
  onInitTaskList,
  onSkipGreeting,
}) => {
  useEffect(() => {
    onInitTaskList();
  }, [onInitTaskList]);
  const redirectToSettings = () => {
    onSkipGreeting();
    history.push('/settings');
  };
  let content = <Spinner />;
  if (Object.keys(taskList.tasks).length) {
    content = <Tasks />;
  }
  if (taskList.isFirstTask || taskList.isFirstVisit) {
    content = (
      <TaskListMessages
        skip={onSkipGreeting}
        redirect={redirectToSettings}
        str={taskList.isFirstVisit ? 'firstVisit' : 'firstTask'}
        isFirstVisit={taskList.isFirstVisit}
      />
    );
  }

  return (
    <div className={classes.TaskList}>
      <div className={classes.AddTaskWrapper}>
        <PageHeading title="Daily Task List" />
        <AddTaskBtn />
      </div>
      {content}
    </div>
  );
};

const mapStateToProps = ({ taskList }) => ({
  taskList,
});

const mapDispatchToProps = (dispatch) => ({
  onInitTaskList: () => dispatch(action.onInitTaskList()),
  onSkipGreeting: () => dispatch(action.onSkipGreeting()),
});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(TaskList));
