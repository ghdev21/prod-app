import React, { useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { withRouter } from 'react-router-dom';
import TimerInfo from '../../components/TimerInfo/TimerInfo';
import Clock from '../../components/Clock/Clock';
import TimerControls from '../../components/TimerControls/TimerControls';
import * as actionTypes from '../../store/actions';

export default withRouter(({ match }) => {
  const { id } = match.params;
  const {
    task,
    time,
    turn,
    mode,
    isCleaned,
    loading,
  } = useSelector((state) => state.timer);
  const dispatch = useDispatch();
  const initHandler = useCallback(() => dispatch(actionTypes.initTimer(id)), [dispatch, id]);
  const startHandler = useCallback(() => dispatch(actionTypes.startIteration()), [dispatch]);
  const finishHandler = () => dispatch(actionTypes.finishIteration());

  useEffect(() => initHandler(), [initHandler]);

  useEffect(() => {
    if (isCleaned) {
      startHandler();
    }
  }, [isCleaned, startHandler]);

  return !loading && (
    <div>
      <TimerInfo task={task} />
      <Clock
        mode={mode}
        time={time}
        turn={turn}
      />
      <TimerControls
        start={startHandler}
        finish={finishHandler}
        mode={mode}
      />
    </div>
  );
});
