import * as actionTypes from './actionTypes';
import axios from '../../axios';

export const onGetTasks = (tasks) => ({
  type: actionTypes.GET_TASKS,
  payload: {
    tasks,
    isFirstTask: !Object.keys(tasks).length,
  },
});

export const onSkipGreeting = () => ({
  type: actionTypes.SKIP_GREETING,
});

export const onInitTaskList = () => (dispatch) => {
  axios.get('tasks.json')
    .then((res) => dispatch(onGetTasks(res.data || {})));
};

export const onOpenTaskListModal = () => ({
  type: actionTypes.OPEN_TASK_LIST_MODAL,
});

export const onCLoseTaskListModal = () => ({
  type: actionTypes.CLOSE_TASK_LIST_MODAL,
});

export const onChangeTaskListModal = (evt, id, prop) => ({
  type: actionTypes.ON_CHANGE_TASK_LIST_MODAL,
  payload: { evt, id, prop },
});

export const onSaveTask = (res) => ({
  type: actionTypes.ON_SAVE_TASK,
  payload: res,
});

export const onStartSaveTask = (data) => (dispatch) => {
  dispatch({ type: actionTypes.ON_SAVE_TASK_START });
  axios.post('tasks.json', data)
    .then((res) => {
      console.log(res); //for tracking saved data
      dispatch(onSaveTask(res));
    });
};
