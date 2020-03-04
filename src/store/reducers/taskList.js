import {
  CLOSE_TASK_LIST_MODAL,
  GET_TASKS,
  CHANGE_TASK_LIST_MODAL,
  OPEN_TASK_LIST_MODAL,
  SKIP_GREETING,
  SAVE_TASK,
  START_SAVING_TASK,
  START_INIT_TASKS,
  EDIT_TASK,
  UPDATE_TASK,
  START_UPDATING_TASK,
  START_DELETING_TASK,
  DELETE_TASK,
  START_MOVING_TO_DAILY,
  MOVE_TO_DAILY,
} from '../actions/actionTypes';
import checkFirstVisit from '../../helpers/checkFirstVisit';
import taskForm from '../../constants/TaskFormOpts';
import getTasks from '../utils/getTasks';
import setFields from '../utils/setFields';
import updateField from '../utils/updateField';

const initialState = {
  tasks: {
    globalList: null,
    dailyList: null,
    done: null,
  },
  isFirstVisit: checkFirstVisit(),
  isFirstTask: null,
  isModalOpen: false,
  editableTask: null,
  loading: false,
  taskFormOpts: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_TASKS:
      return getTasks(state, action);

    case SKIP_GREETING:
      return { ...state, isFirstVisit: false };

    case OPEN_TASK_LIST_MODAL:
      return { ...state, taskFormOpts: taskForm(), isModalOpen: true };

    case CLOSE_TASK_LIST_MODAL:
      return { ...state, isModalOpen: false, editableTask: false };

    case CHANGE_TASK_LIST_MODAL:
      return updateField(state, action.payload);

    case START_SAVING_TASK:
      return { ...state, loading: true };

    case SAVE_TASK:
      return { ...state, loading: false, isModalOpen: false };

    case UPDATE_TASK:
      return {
        ...state, loading: false, isModalOpen: false, editableTask: null,
      };

    case START_UPDATING_TASK:
      return { ...state, loading: true };

    case START_INIT_TASKS:
      return { ...state, loading: true };

    case EDIT_TASK:
      return setFields(state, action.payload);

    case START_DELETING_TASK:
      return { ...state, loading: true };

    case DELETE_TASK:
      return {
        ...state, loading: false, isModalOpen: false, editableTask: null,
      };

    case START_MOVING_TO_DAILY:
      return { ...state, loading: true };

    case MOVE_TO_DAILY:
      return { ...state, loading: false };

    default:
      return state;
  }
};
