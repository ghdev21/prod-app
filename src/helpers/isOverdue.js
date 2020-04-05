export default (dateNow, deadlineDate) => {
  const nextDay = new Date(dateNow.toLocaleDateString('en-US'));

  return deadlineDate.getTime() < nextDay.getTime();
};
