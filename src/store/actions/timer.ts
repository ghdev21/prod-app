import * as actionTypes from './actionTypes';
import axios from '../../axios';
import {Store} from "../../types/Store";

export const saveSettings = (settings: Timer.SettingsResponseType, task: Timer.TaskResponseType): Store.Action => {
  return {
    type: actionTypes.INIT_TIMER_HAS_FETCHED,
    payload: {
      settings: settings.data,
      task: task.data,
    },
  };
};

export const startIteration = (): Store.Action => ({
  type: actionTypes.START_ITERATION_HAS_FETCHED,
});

export const finishIteration = (): Store.Action => ({
  type: actionTypes.FINISH_ITERATION_HAS_FETCHED,
});

export const countDown = () => ({
  type: actionTypes.COUNT_DOWN_HAS_FETCHED,
});

export const initTimer = (
    id: string
): Store.ThunkAction<Promise<void>> => async (dispatch) => {
    console.log('fetching')
  dispatch({ type: actionTypes.INIT_TIMER_IS_FETCHING });
  const fetchedEndpoints = (['settings.json', `tasks/${id}.json`]).map((item) => axios.get(item));

 Promise.all(fetchedEndpoints)
    .then((res) => {
      const [settings, task] = res;
      dispatch(saveSettings(settings, task));
    });
};
