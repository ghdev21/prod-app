export default (num) => {
  const hours = Math.floor(num / 60);
  const minutes = num % 60;
  let time = `${hours}h ${minutes} m `;
  if (hours === 0) time = `${minutes} m`;
  if (minutes === 0) {
    time = `${hours}h`;
  }
  return time;
};