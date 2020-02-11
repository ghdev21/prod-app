import React from 'react';
import { connect } from 'react-redux';
import Task from './Task';
import * as action from '../../store/actions';
import classes from './Task.module.scss';

const Tasks = ({ taskList, editTask }) => {
  const { globalList } = taskList.tasks;
  let content = null;

  if (globalList) {
    content = globalList.map(item => {
      const [fireBaseId, obj] = item;
      const data = { ...obj, fireBaseId };
      return <Task key={data.fireBaseId} {...data} edit={editTask} />;
    });
  }

  return (
    <div className={classes.GlobalList}>
      {content}
    </div>
  );
};

const mapStateToProps = ({ taskList }) => ({
  taskList,
});

const mapDispatchToProps = (dispatch) => ({
  editTask: (data) => dispatch(action.editTask(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Tasks);
