import {
  CLOSE_TASK_LIST_MODAL,
  GET_TASKS,
  CHANGE_TASK_LIST_MODAL,
  OPEN_TASK_LIST_MODAL,
  SKIP_GREETING,
  SAVE_TASK,
  EDIT_TASK,
  UPDATE_TASK,
  DELETE_TASK,
  MOVE_TO_DAILY,
  ENABLE_DELETE_MODE,
  DISABLE_DELETE_MODE,
  UPDATE_TRASH,
  SHOW_DELETE_CONFIRMATION,
  UPDATE_TRASH_ITEM,
  DECLINE_DELETING,
} from '../actions/actionTypes';
import checkFirstVisit from '../../helpers/checkFirstVisit';
import taskForm from '../../constants/TaskFormOpts';
import getTasks from '../utils/getTasks';
import setFields from '../utils/setFields';
import updateField from '../utils/updateField';
import handleTrashItems from '../../helpers/handleTrashItems';

export const initialState = {
  tasks: {
    globalList: null,
    dailyList: null,
    done: null,
  },
  isFirstVisit: checkFirstVisit(sessionStorage.getItem('firstVisit')),
  isFirstTask: null,
  isModalOpen: false,
  editableTask: null,
  loading: false,
  isDeleteMode: false,
  shouldBeDeleteItems: [],
  isDeleteConfirmationShown: false,
  taskFormOpts: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_TASKS.HAS_FETCHED:
      return getTasks(state, action);

    case SKIP_GREETING.HAS_FETCHED:
      return { ...state, isFirstVisit: false };

    case OPEN_TASK_LIST_MODAL.HAS_FETCHED:
      return { ...state, taskFormOpts: taskForm(), isModalOpen: true };

    case CLOSE_TASK_LIST_MODAL.HAS_FETCHED:
      return { ...state, isModalOpen: false, editableTask: false };

    case CHANGE_TASK_LIST_MODAL.HAS_FETCHED:
      return updateField(state, action.payload);

    case SAVE_TASK.IS_FETCHING:
      return { ...state, loading: true };

    case SAVE_TASK.HAS_FETCHED:
      return { ...state, loading: false, isModalOpen: false };

    case UPDATE_TASK.HAS_FETCHED:
      return {
        ...state, loading: false, isModalOpen: false, editableTask: false,
      };

    case UPDATE_TASK.IS_FETCHING:
      return { ...state, loading: true };

    case GET_TASKS.IS_FETCHING:
      return { ...state, loading: true };

    case EDIT_TASK.HAS_FETCHED:
      return setFields(state, action.payload);

    case DELETE_TASK.IS_FETCHING:
      return { ...state, loading: true };

    case DELETE_TASK.HAS_FETCHED:
      return {
        ...state,
        loading: false,
        isModalOpen: false,
        shouldBeDeleteItems: [],
        isDeleteConfirmationShown: false,
        editableTask: null,
      };

    case MOVE_TO_DAILY.IS_FETCHING:
      return { ...state, loading: true };

    case MOVE_TO_DAILY.HAS_FETCHED:
      return { ...state, loading: false };

    case ENABLE_DELETE_MODE.HAS_FETCHED:
      return { ...state, isDeleteMode: true };

    case DISABLE_DELETE_MODE.HAS_FETCHED:
      return { ...state, isDeleteMode: false };

    case UPDATE_TRASH.HAS_FETCHED:
      return { ...state, shouldBeDeleteItems: action.payload };

    case SHOW_DELETE_CONFIRMATION.HAS_FETCHED:
      return { ...state, isDeleteConfirmationShown: true, isModalOpen: true };

    case DECLINE_DELETING.HAS_FETCHED:
      return { ...state, isModalOpen: false, isDeleteConfirmationShown: false };

    case UPDATE_TRASH_ITEM.HAS_FETCHED:
      return handleTrashItems(state, action.payload);

    default:
      return state;
  }
};
