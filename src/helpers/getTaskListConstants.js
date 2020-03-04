export default (task) => {
  const { isDaily, done } = task;

  return {
    IS_DAILY_LIST: isDaily,
    IS_DONE_LIST: done,
    IS_GLOBAL_LIST: !isDaily && !done,
  };
};
