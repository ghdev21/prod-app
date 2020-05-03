import {
  FINISH_ITERATION,
  INIT_TIMER,
  START_ITERATION,
} from '../actions/actionTypes';
import switchTurn from '../utils/switchTurn';

export const initialState = {
  settings: null,
  task: null,
  turn: 0,
  mode: '',
  time: 0,
  loading: true,
  isCleaned: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case INIT_TIMER.IS_FETCHING:
      return {
        ...state,
        loading: false,
      };

    case INIT_TIMER.HAS_FETCHED:
      return {
        ...state,
        settings: action.payload.settings,
        task: action.payload.task,
      };

    case START_ITERATION.HAS_FETCHED:
      return switchTurn(state, action.payload);

    case FINISH_ITERATION.HAS_FETCHED:
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
