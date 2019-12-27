import { GET_TASKS, SKIP_GREETING } from '../actions/actionTypes';
import checkFirstVisit from '../../helpers/checkFirstVisit';

const initialState = {
  tasks: {},
  isFirstVisit: checkFirstVisit(),
  isFirstTask: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_TASKS:
      return { ...state, tasks: action.payload.tasks, isFirstTask: action.payload.isFirstTask };

    case SKIP_GREETING:
      return { ...state, isFirstVisit: false };

    default:
      return state;
  }
};
