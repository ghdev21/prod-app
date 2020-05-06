import * as actionTypes from './actionTypes';
import axios from '../../axios';

export const saveSettings = (res) => {
  const [settings, task] = res;
  return {
    type: actionTypes.INIT_TIMER.HAS_FETCHED,
    payload: {
      settings: settings.data,
      task: task.data,
    },
  };
};

export const startIteration = (val) => ({
  type: actionTypes.START_ITERATION.HAS_FETCHED,
  payload: val,
});

export const finishIteration = () => ({
  type: actionTypes.FINISH_ITERATION.HAS_FETCHED,
});

export const countDown = () => ({
  type: actionTypes.COUNT_DOWN.HAS_FETCHED,
});

export const initTimer = (id) => (dispatch) => {
  dispatch({ type: actionTypes.INIT_TIMER.IS_FETCHING });
  const fetchedEndpoints = (['settings.json', `tasks/${id}.json`]).map((item) => axios.get(item));

  Promise.all(fetchedEndpoints)
    .then((res) => dispatch(saveSettings(res)));
};
