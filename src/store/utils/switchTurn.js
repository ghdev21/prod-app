import convertSettings from './convertSettings';

export default (state) => {
  const { settings, executionQueue, task } = state;
  const {
    work,
    shortBreak,
    longBreak,
  } = convertSettings(settings);
  const nextTurn = executionQueue + 1;
  let time = work.value;
  let mode = 'work';

  if (nextTurn % 2 === 0) {
    time = shortBreak.value;
    mode = 'break';
  }

  if (task.estimation % executionQueue === 0) {
    time = longBreak.value;
  }
  return {
    ...state,
    time,
    mode,
    executionQueue: nextTurn,
    isCleaned: false,
  };
};
