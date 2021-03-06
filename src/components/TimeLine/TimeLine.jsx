import React from 'react';

import uuid from 'uuid/v1';
import TimeLineSegment from './TimeLineSegment';
import TimeLineMark from './TimeLineMark';
import classes from './TimeLine.module.scss';
import convertNumToTIme from '../../helpers/convertNumToTime';
import getTimeLineData from '../../helpers/getTimeLineData';

export default ({ state }) => {
  const [work, iteration, short, long] = state;
  const { map, unit, timeIntervals, topMarks } = getTimeLineData(state);
  const timeMarkHandler = (timeMark) => (
    <TimeLineMark
      key={uuid()}
      leftShift={`${unit * timeMark.time}%`}
      text={timeMark.text || convertNumToTIme(timeMark.time)}
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

  const getMappedList = map(timeMarkHandler);
  const topMarksContainer = getMappedList(topMarks);
  const markLines = getMappedList(timeIntervals);

  return (
    <>
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
    </>
  );
};
