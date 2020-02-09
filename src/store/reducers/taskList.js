import {
  CLOSE_TASK_LIST_MODAL,
  GET_TASKS,
  CHANGE_TASK_LIST_MODAL,
  OPEN_TASK_LIST_MODAL,
  SKIP_GREETING,
  SAVE_TASK,
  START_SAVE_TASK,
  START_INIT_TASKS,
  EDIT_TASK,
  UPDATE_TASK,
  START_UPDATE_TASK,
  START_DELETE_TASK,
  DELETE_TASK,
} from '../actions/actionTypes';
import checkFirstVisit from '../../helpers/checkFirstVisit';
import taskForm from '../../constants/TaskFormOpts';
import getTasks from '../utils/getTasks';
import setFields from '../utils/setFields';
import updateField from '../utils/updateField';

const initialState = {
  tasks: {
    globalList: null,
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

    case START_SAVE_TASK:
      return { ...state, loading: true };

    case SAVE_TASK:
      return { ...state, loading: false, isModalOpen: false };

    case UPDATE_TASK:
      return { ...state, loading: false, isModalOpen: false, editableTask: null };

    case START_UPDATE_TASK:
      return { ...state, loading: true };

    case START_INIT_TASKS:
      return { ...state, loading: true };

    case EDIT_TASK:
      return setFields(state, action.payload);

    case START_DELETE_TASK:
      return { ...state, loading: true };

    case DELETE_TASK:
      return { ...state, loading: false, isModalOpen: false, editableTask: null };

    default:
      return state;
  }
};
