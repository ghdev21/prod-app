import { curry } from 'ramda';

const checkIsPropTruthy = curry((prop, item) => item[1][prop]);
const filter = curry((arr, fn) => arr.filter(fn));
const checkIsTaskDaily = (item) => !item[1].done && !item[1].isDaily;

const filterByLists = (list) => {
  const filterBy = filter(list);
  const daily = filterBy(checkIsPropTruthy('isDaily'));
  const done = filterBy(checkIsPropTruthy('done'));
  const global = filterBy(checkIsTaskDaily);

  return { global, done, daily };
};


export default (state, action) => {
  const { tasks, isFirstTask } = action.payload;
  const allTasks = Object.entries(tasks);
  const { global, done, daily } = filterByLists(allTasks);

  const taskListCopy = {
    ...state.tasks,
    globalList: global,
    dailyList: daily,
    done,
  };

  return { ...state, tasks: taskListCopy, isFirstTask };
};
