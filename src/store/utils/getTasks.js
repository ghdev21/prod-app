export default (state, action) => {
  const { tasks, isFirstTask } = action.payload;
  const { globalList } = tasks;

  if (globalList) {
    tasks.globalList = Object.entries(globalList);
  }

  return { ...state, tasks, isFirstTask };
};
