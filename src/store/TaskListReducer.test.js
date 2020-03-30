import { applyMiddleware, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import taskListReducer from './reducers/taskList';
import * as actionTypes from './actions/actionTypes';

const rootReducer = taskListReducer;

describe('test redux', () => {
  let testStore;

  beforeEach(() => {
    testStore = createStore(rootReducer, compose(applyMiddleware(thunk)));
  });

  it('should handle state for DECLINE_DELETING.HAS_FETCHED ', () => {
    testStore.dispatch({ type: actionTypes.DECLINE_DELETING.HAS_FETCHED });
    const state = testStore.getState();

    expect(state).toEqual(
      {
        ...state,
        isModalOpen: false,
        isDeleteConfirmationShown: false,
      },
    );
  });

  it('should handle state for DELETE_TASK.IS_FETCHING', () => {
    testStore.dispatch({ type: actionTypes.DELETE_TASK.IS_FETCHING });
    const state = testStore.getState();
    expect(state).toEqual(
      {
        ...state,
        loading: true,
      },
    );
  });

  it('should handle state for DELETE_TASK.HAS_FETCHED', () => {
    testStore.dispatch({ type: actionTypes.DELETE_TASK.HAS_FETCHED });
    const state = testStore.getState();
    expect(state).toEqual(
      {
        ...state,
        isModalOpen: false,
        isDeleteConfirmationShown: false,
        shouldBeDeleteItems: [],
      },
    );
  });
});
