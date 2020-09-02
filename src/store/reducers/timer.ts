import {
  FINISH_ITERATION_HAS_FETCHED,
  INIT_TIMER_HAS_FETCHED,
  INIT_TIMER_IS_FETCHING,
  START_ITERATION_HAS_FETCHED
} from '../actions/actionTypes';
import switchTurn from '../utils/switchTurn';
import {Store} from "../../types/Store";

export const initialState: Store.ITimerState = {
  settings: null,
  task: null,
  executionQueue: 0,
  mode: '',
  time: 0,
  isLoading: true,
  isCleaned: false,
};

export default (state = initialState, action: Store.Action)
    :Store.ITimerState => {
  switch (action.type) {
    case INIT_TIMER_IS_FETCHING:
      return {
        ...state,
        isLoading: false,
      };
    case INIT_TIMER_HAS_FETCHED:
      return {
        ...state,
        ...action.payload
      };

    case START_ITERATION_HAS_FETCHED:
      return switchTurn(state);

    case FINISH_ITERATION_HAS_FETCHED:
      return {
        ...state,
        mode: '',
        time: 0,
        isCleaned: true,
      };

    default:
      return state;
  }
};
