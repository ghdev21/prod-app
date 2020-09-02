import React, {useEffect, useCallback, FC} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { withRouter } from 'react-router-dom';
import {RouteComponentProps} from 'react-router';
import { TimerInfo } from '../../components/TimerInfo/TimerInfo';
import { Clock } from '../../components/Clock/Clock';
import { TimerControls } from '../../components/TimerControls/TimerControls';
import * as actionTypes from '../../store/actions';
import {Store} from "../../types/Store";

type ComponentProps = RouteComponentProps<{id: string}>;

const TimerPage:FC<ComponentProps> = (props) => {
  const {match: {
    params: {id},
  }} = props;
  const {
    task,
    time,
    executionQueue,
    mode,
    isCleaned,
    isLoading,
  } = useSelector((state: Store.IState) => state.timer);
  const dispatch = useDispatch();
  const initHandler = useCallback(() => dispatch(actionTypes.initTimer(id)), [dispatch, id]);
  const startHandler = useCallback(() => dispatch(actionTypes.startIteration()), [dispatch]);
  const finishHandler = () => dispatch(actionTypes.finishIteration());

  useEffect(() => {
    initHandler()
  }, [initHandler, id]);

  useEffect(() => {
    if (isCleaned) {
      startHandler();
    }
  }, [isCleaned, startHandler]);

  return !isLoading ? (
    <div>
      <TimerInfo task={task} />
      <Clock
        mode={mode}
        time={time}
        executionQueue={executionQueue}
      />
      <TimerControls
        start={startHandler}
        finish={finishHandler}
        mode={mode}
      />
    </div>
  ): null;
};

export default withRouter(TimerPage);