export default (isFirstVisit) => {
  if (!isFirstVisit) {
    sessionStorage.setItem('firstVisit', 'true');
  }
  return !isFirstVisit;
};
