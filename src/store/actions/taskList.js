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

export const closeTaskListModal = () => ({
  type: actionTypes.CLOSE_TASK_LIST_MODAL,
});

export const changeTaskListModal = (evt, id, prop) => ({
  type: actionTypes.CHANGE_TASK_LIST_MODAL,
  payload: { evt, id, prop },
});

export const saveTask = () => ({
  type: actionTypes.SAVE_TASK,
});

export const editTask = (data) => ({
  type: actionTypes.EDIT_TASK,
  payload: data,
});

export const updateTask = () => ({
  type: actionTypes.UPDATE_TASK,
});

export const deleteTask = () => ({
  type: actionTypes.DELETE_TASK,
});

export const moveToDaily = () => ({
  type: actionTypes.MOVE_TO_DAILY,
});

export const startMovingToDaily = (id, data) => (dispatch) => {
  dispatch({ type: actionTypes.START_MOVING_TO_DAILY });

  const dataToSave = { ...data, isDaily: true };

  axios.patch(`tasks/${id}.json`, dataToSave)
    .then(() => {
      dispatch(moveToDaily());
      dispatch(initTaskList());
    });
};

export const startSaveTask = (data) => (dispatch) => {
  dispatch({ type: actionTypes.START_SAVING_TASK });
  axios.post('tasks.json', data)
    .then(() => {
      dispatch(saveTask());
      dispatch(initTaskList());
    });
};

export const startUpdateTask = (data, id) => (dispatch) => {
  dispatch({ type: actionTypes.START_UPDATING_TASK });
  axios.put(`tasks/${id}.json`, data)
    .then(() => {
      dispatch(updateTask());
      dispatch(initTaskList());
    });
};

export const startDeleteTask = (id) => (dispatch) => {
  dispatch({ type: actionTypes.START_DELETING_TASK });
  axios.delete(`tasks/${id}.json`)
    .then(() => {
      dispatch(deleteTask());
      dispatch(initTaskList());
    });
};
