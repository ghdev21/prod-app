import { curry } from 'ramda';
import convertNumToTIme from './convertNumToTIme';

export default ([work, iteration, short, long]) => {
  const map = curry((fn, arr) => arr.map(fn));
  const workWithShortBreaks = work.value * iteration.value + (short.value * (iteration.value - 1));
  const totalTime = (workWithShortBreaks * 2) + long.value;
  const unit = 100 / totalTime;
  const cycleTime = workWithShortBreaks + long.value;
  let currentTime = 0;

  const timeIntervals = [...Array(Math.floor(totalTime / 30))].map((_) => {
    if ((currentTime + 30) < totalTime) {
      currentTime += 30;
    }
    return { time: currentTime };
  });
  const topMarks = [
    { text: convertNumToTIme(0), opts: 'Start' },
    { text: `First cycle ${convertNumToTIme(cycleTime)}`, time: cycleTime },
    { text: convertNumToTIme(totalTime), opts: 'End' },
  ];
  return {
    map,
    unit,
    timeIntervals,
    topMarks,
  };
};
