import * as actionTypes from './actionTypes';
import axios from '../../axios';

export const onGetTasks = (tasks) => ({
  type: actionTypes.GET_TASKS,
  tasks,
  isFirstTask: !Object.keys(tasks).length,
});

export const onSkipGreeting = () => ({
  type: actionTypes.SKIP_GREETING,
});

export const onInitTaskList = () => (dispatch) => {
  axios.get('tasks.json')
    .then((res) => dispatch(onGetTasks(res.data || {})));
};
