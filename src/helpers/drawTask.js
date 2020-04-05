import React from 'react';
import { curry } from 'ramda';
import Task from '../components/Tasks/Task/Task';

export default curry((props, task) => {
  const [fireBaseId, obj] = task;

  return (
    <Task
      key={fireBaseId}
      id={fireBaseId}
      taskData={obj}
      {...props}
    />
  );
});
