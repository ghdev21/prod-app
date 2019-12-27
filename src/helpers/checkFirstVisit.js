export default () => {
  const isFirstVisit = sessionStorage.getItem('firstVisit');
  sessionStorage.setItem('firstVisit', 'true');
  return !isFirstVisit;
};