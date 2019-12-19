import React from 'react';
import AddTaskBtn from '../../components/AddTask/AddTaskBtn';
import PageHeading from '../../components/PageHeading/PageHeading';
import classes from './TaskList.module.scss';

export default (props) => (
  <div className={classes.TaskList}>
    <div className={classes.AddTaskWrapper}>
      <PageHeading title="Daily Task List" />
      <AddTaskBtn />
    </div>
  </div>
);
