import React, { useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import PlusBtn from '../../components/AddTask/PlusBtn';
import PageHeading from '../../components/PageHeading/PageHeading';
import TaskListMessages from '../../components/TaskListMessages/TaskListMessages';
import Spinner from '../../components/UI/Spinner/Spinner';
import Tasks from '../../components/Tasks/Tasks';
import Modal from '../../components/UI/Modal/Modal';
import TaskForm from '../../components/TaskForm/Form';
import classes from './TaskList.module.scss';
import * as action from '../../store/actions/index';

const TaskList = ({
  history,
  taskList,
  initTaskList,
  skipGreeting,
  openTaskListModal,
}) => {
  useEffect(() => {
    initTaskList();
  }, [initTaskList]);

  const redirectToSettings = () => {
    skipGreeting();
    history.push('/settings');
  };
  let content = <Spinner />;

  if (taskList.tasks.globalList) {
    content = <Tasks />;
  }
  if (taskList.isFirstTask || taskList.isFirstVisit) {
    content = (
      <TaskListMessages
        skip={skipGreeting}
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
        <PlusBtn showModal={openTaskListModal} />
      </div>
      {content}
      {taskList.isModalOpen
        && (
          <Modal>
            <TaskForm />
          </Modal>
        )}
    </div>
  );
};

const mapStateToProps = ({ taskList }) => ({
  taskList,
});

const mapDispatchToProps = (dispatch) => ({
  initTaskList: () => dispatch(action.initTaskList()),
  skipGreeting: () => dispatch(action.skipGreeting()),
  openTaskListModal: () => dispatch(action.openTaskListModal()),
});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(TaskList));
