import {
  CLOSE_TASK_LIST_MODAL,
  GET_TASKS,
  ON_CHANGE_TASK_LIST_MODAL,
  OPEN_TASK_LIST_MODAL,
  SKIP_GREETING,
  ON_SAVE_TASK,
  ON_SAVE_TASK_START,
} from '../actions/actionTypes';
import checkFirstVisit from '../../helpers/checkFirstVisit';
import taskForm from '../../constants/TaskFormOpts';

const initialState = {
  tasks: {},
  isFirstVisit: checkFirstVisit(),
  isFirstTask: null,
  isModalOpen: false,
  loading: false,
  taskFormOpts: [],
};

const updateFormField = (state, action) => {
  const { evt, id, prop } = action;
  const { value } = evt.target;
  const index = state.taskFormOpts.findIndex((item) => item.labelName === id);
  const newState = [...state.taskFormOpts];

  newState[index].value = value;

  if (prop === 'checked') {
    newState[index][prop] = value;
  }

  return { ...state, taskFormOpts: newState };
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_TASKS:
      return { ...state, tasks: action.payload.tasks, isFirstTask: action.payload.isFirstTask };

    case SKIP_GREETING:
      return { ...state, isFirstVisit: false };

    case OPEN_TASK_LIST_MODAL:
      return { ...state, taskFormOpts: taskForm(), isModalOpen: true };

    case CLOSE_TASK_LIST_MODAL:
      return { ...state, isModalOpen: false };

    case ON_CHANGE_TASK_LIST_MODAL:
      return updateFormField(state, action.payload);

    case ON_SAVE_TASK_START:
      return { ...state, loading: true };

    case ON_SAVE_TASK:
      return { ...state, loading: false, isModalOpen: false };

    default:
      return state;
  }
};
