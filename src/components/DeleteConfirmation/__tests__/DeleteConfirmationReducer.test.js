import * as actionTypes from '../../../store/actions/actionTypes';
import reducer, { initialState } from '../../../store/reducers/taskList';


describe('delete task confirmation modal reducer', () => {

  it('should check state while delete proccesing', () => {
    expect(reducer(initialState, { type: actionTypes.DELETE_TASK.IS_FETCHING })).toEqual(
      {
        ...initialState,
        loading: true,
      },
    );
  });

  it('should check state after deleting', () => {
    expect(reducer(initialState, { type: actionTypes.DELETE_TASK.HAS_FETCHED })).toEqual(
      {
        ...initialState,
        isModalOpen: false,
        shouldBeDeleteItems: [],
        isDeleteConfirmationShown: false,
        editableTask: null,
      },
    );
  });

  it('should check state when deleting declined', () => {
    expect(reducer(initialState, { type: actionTypes.DECLINE_DELETING.HAS_FETCHED })).toEqual(
      {
        ...initialState,
        isModalOpen: false,
        isDeleteConfirmationShown: false,
      },
    );
  });
});
