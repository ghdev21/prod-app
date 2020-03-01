import { curry } from 'ramda';

export default (state, action) => {
  const { tasks, isFirstTask } = action.payload;
  const allTasks = Object.entries(tasks);
  const get = curry((prop, bool, item) => {
    const [, taskData] = item;

    return bool ? taskData[prop] : !taskData[prop];
  });

  const getByDailyProp = get('isDaily');
  const getByDoneProp = get('done');
  const daily = allTasks.filter(getByDailyProp(true));
  const done = allTasks.filter(getByDoneProp(true));
  const global = allTasks.filter((item) => !item[1].done && !item[1].isDaily);
  const tasksFromStateCopy = { ...state.tasks };

  tasksFromStateCopy.globalList = global;
  tasksFromStateCopy.dailyList = daily;
  tasksFromStateCopy.done = done;

  return { ...state, tasks: tasksFromStateCopy, isFirstTask };
};
