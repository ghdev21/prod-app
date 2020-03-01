export default (dateNow, deadlineDate) => {
  const now = new Date(dateNow.setDate(dateNow.getDate()));
  const nextDay = new Date(now.toLocaleDateString('en-US'));

  return deadlineDate.getTime() < nextDay.getTime();
};
