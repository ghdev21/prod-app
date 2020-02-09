import * as actionTypes from './actionTypes';
import axios from '../../axios';

export const getTasks = (tasks) => ({
  type: actionTypes.GET_TASKS,
  payload: {
    tasks,
    isFirstTask: !Object.keys(tasks).length,
  },
});

export const skipGreeting = () => ({
  type: actionTypes.SKIP_GREETING,
});

export const initTaskList = () => (dispatch) => {
  axios.get('tasks.json')
    .then((res) => dispatch(getTasks(res.data || {})));
};

export const openTaskListModal = () => ({
  type: actionTypes.OPEN_TASK_LIST_MODAL,
});

export const cLoseTaskListModal = () => ({
  type: actionTypes.CLOSE_TASK_LIST_MODAL,
});

export const changeTaskListModal = (evt, id, prop) => ({
  type: actionTypes.CHANGE_TASK_LIST_MODAL,
  payload: { evt, id, prop },
});

export const saveTask = (res) => ({
  type: actionTypes.SAVE_TASK,
  payload: res,
});

export const editTask = (data) => ({
  type: actionTypes.EDIT_TASK,
  payload: data,
});

export const updateTask = (data) => ({
  type: actionTypes.UPDATE_TASK,
  payload: data,
});

export const deleteTask = () => ({
  type: actionTypes.DELETE_TASK,
});

export const startSaveTask = (data) => (dispatch) => {
  dispatch({ type: actionTypes.START_SAVE_TASK });
  axios.post('tasks/globalList.json', data)
    .then((res) => {
      dispatch(saveTask(res));
      dispatch(initTaskList());
    });
};

export const startUpdateTask = (data, id) => (dispatch) => {
  dispatch({ type: actionTypes.START_UPDATE_TASK });
  axios.put(`tasks/globalList/${id}.json`, data)
    .then((res) => {
      dispatch(updateTask(res));
      dispatch(initTaskList());
    });
};

export const startDeleteTask = (id) => (dispatch) => {
  dispatch({ type: actionTypes.START_DELETE_TASK });
  axios.delete(`tasks/globalList/${id}.json`)
    .then(() => {
      dispatch(deleteTask());
      dispatch(initTaskList());
    });
};
