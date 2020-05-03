import convertSettings from './convertSettings';

export default (state) => {
  const { settings, turn, task } = state;
  const {
    work,
    shortBreak,
    longBreak,
  } = convertSettings(settings);
  const nextTurn = turn + 1;
  let time = work.value;
  let mode = 'work';

  if (nextTurn % 2 === 0) {
    time = shortBreak.value;
    mode = 'break';
  }

  if (task.estimation % turn === 0) {
    time = longBreak.value;
  }
  return {
    ...state,
    time,
    mode,
    turn: nextTurn,
    isCleaned: false,
  };
};
