import React from 'react';

import uuid from 'uuid/v1';
import { curry } from 'ramda';
import Auxiliary from '../../hoc/Auxiliary/Auxiliary';
import TimeLineSegment from './TimeLineSegment';
import TimeLineMark from './TimeLineMark';
import classes from './TimeLine.module.scss';

const toMinutes = (num) => {
  const hours = Math.floor(num / 60);
  const minutes = num % 60;
  let time = `${hours}h ${minutes} m `;
  if (hours === 0) time = `${minutes} m`;
  if (minutes === 0) {
    time = `${hours}h`;
  }
  return time;
};

export default ({ state }) => {
  const [work, iteration, short, long] = state;
  const map = curry((fn, arr) => arr.map(fn));
  const workWithShortBreaks = work.value * iteration.value + (short.value * (iteration.value - 1));
  const totalTime = (workWithShortBreaks * 2) + long.value;
  const unit = 100 / totalTime;
  const cycleTime = workWithShortBreaks + long.value;
  let currentTime = 0;

  const timeMarkHandler = (timeMark) => (
    <TimeLineMark
      key={uuid()}
      leftShift={`${unit * timeMark.time}%`}
      text={timeMark.text || toMinutes(timeMark.time)}
      markOpts={timeMark.opts}
    />
  );
  const workProccess = [...Array(iteration.value)].map((_, index) => {
    const returnedValue = [
      <TimeLineSegment
        key={uuid()}
        segment="work"
        size={unit * work.value}
      />,
    ];
    if (index !== iteration.value - 1) {
      return [...returnedValue,
        <TimeLineSegment
          key={uuid()}
          segment="shortBreak"
          size={unit * short.value}
        />,
      ];
    }
    return returnedValue;
  });
  const timeLineGraph = [workProccess,
    <TimeLineSegment
      key={uuid()}
      segment="longBreak"
      size={unit * long.value}
    />, workProccess];
  // eslint-disable-next-line array-callback-return
  const timeIntervals = [...Array(Math.floor(totalTime / 30))].map((_) => {

    if ((currentTime + 30) < totalTime) {
      currentTime += 30;
    }
    return { time: currentTime };
  });
  const topMarks = [
    { text: toMinutes(0), opts: 'Start' },
    { text: `First cycle ${toMinutes(totalTime)}`, time: cycleTime },
    { text: toMinutes(totalTime), opts: 'End' },
  ];
  const getMappedList = map(timeMarkHandler);
  const topMarksContainer = getMappedList(topMarks);
  const markLines = getMappedList(timeIntervals);

  return (
    <Auxiliary>
      <h3 className={classes.Cycle}>Your cycle</h3>
      <div className={classes.TimeLineWrapper}>
        <div className={classes.TopMarksWrapper}>
          {topMarksContainer}
        </div>
        <div className={classes.TimeLine}>
          {timeLineGraph}
        </div>
        <div className={classes.BottomMarksWrapper}>
          {markLines}
        </div>
      </div>
    </Auxiliary>
  );
};
