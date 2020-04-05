import * as actionTypes from './actionTypes';
import axios from '../../axios';

export const getTasks = (tasks) => ({
  type: actionTypes.GET_TASKS.HAS_FETCHED,
  payload: {
    tasks,
    isFirstTask: !Object.keys(tasks).length,
  },
});

export const declineDeleting = () => ({
  type: actionTypes.DECLINE_DELETING.HAS_FETCHED,
});

export const skipGreeting = () => ({
  type: actionTypes.SKIP_GREETING.HAS_FETCHED,
});

export const enableDeleteMode = () => ({
  type: actionTypes.ENABLE_DELETE_MODE.HAS_FETCHED,
});

export const disableDeleteMode = () => ({
  type: actionTypes.DISABLE_DELETE_MODE.HAS_FETCHED,
});

export const moveToTrash = (id, flags) => ({
  type: actionTypes.MOVE_TO_TRASH.HAS_FETCHED,
  payload: { id, flags },
});

export const updateTrash = (tasks) => ({
  type: actionTypes.UPDATE_TRASH.HAS_FETCHED,
  payload: tasks,
});

export const showDeleteConfirmation = () => ({
  type: actionTypes.SHOW_DELETE_CONFIRMATION.HAS_FETCHED,
});

export const initTaskList = () => (dispatch) => {
  dispatch({ type: actionTypes.GET_TASKS.IS_FETCHING });
  axios.get('tasks.json')
    .then((res) => dispatch(getTasks(res.data || {})));
};

export const openTaskListModal = () => ({
  type: actionTypes.OPEN_TASK_LIST_MODAL.HAS_FETCHED,
});

export const updateTrashItem = (ids, isSelected) => ({
  type: actionTypes.UPDATE_TRASH_ITEM.HAS_FETCHED,
  payload: { ids, isSelected },
});

export const closeTaskListModal = () => ({
  type: actionTypes.CLOSE_TASK_LIST_MODAL.HAS_FETCHED,
});

export const changeTaskListModal = (evt, id, prop) => ({
  type: actionTypes.CHANGE_TASK_LIST_MODAL.HAS_FETCHED,
  payload: { evt, id, prop },
});

export const editTask = (data) => ({
  type: actionTypes.EDIT_TASK.HAS_FETCHED,
  payload: data,
});

export const moveToDaily = (id, data) => (dispatch) => {
  dispatch({ type: actionTypes.MOVE_TO_DAILY.IS_FETCHING });

  const dataToSave = { ...data, isDaily: true };

  axios.patch(`tasks/${id}.json`, dataToSave)
    .then(() => {
      dispatch({ type: actionTypes.MOVE_TO_DAILY.HAS_FETCHED });
      dispatch(initTaskList());
    });
};

export const saveTask = (data) => (dispatch) => {
  dispatch({ type: actionTypes.SAVE_TASK.IS_FETCHING });
  axios.post('tasks.json', data)
    .then(() => {
      dispatch({ type: actionTypes.SAVE_TASK.HAS_FETCHED });
      dispatch(initTaskList());
    });
};

export const updateTask = ({ data, id }) => (dispatch) => {
  dispatch({ type: actionTypes.UPDATE_TASK.IS_FETCHING });
  axios.put(`tasks/${id}.json`, data)
    .then(() => {
      dispatch({ type: actionTypes.UPDATE_TASK.HAS_FETCHED });
      dispatch(initTaskList());
    });
};

export const deleteTask = (...ids) => (dispatch) => {
  dispatch({ type: actionTypes.DELETE_TASK.IS_FETCHING });
  const idsPromises = ids.map((id) => axios.delete(`tasks/${id}.json`));
  Promise.all(idsPromises)
    .then(() => {
      dispatch({ type: actionTypes.DELETE_TASK.HAS_FETCHED });
      dispatch(initTaskList());
    })
    .catch((err) => console.log(err));
};
