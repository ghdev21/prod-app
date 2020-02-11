export default (state, action) => {
  const { evt, id, prop } = action;
  const { value } = evt.target;
  const index = state.taskFormOpts.findIndex((item) => item.labelName === id);
  const newState = [...state.taskFormOpts];

  newState[index].value = value;

  if (prop === 'checked') {
    newState[index][prop] = value;
  }

  return { ...state, taskFormOpts: newState };
};
