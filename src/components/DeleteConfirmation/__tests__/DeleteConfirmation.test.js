import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import DeleteConfirmation from '../DeleteConfirmation';
import Button from '../../UI/Button/Button';
import Spinner from '../../UI/Spinner/Spinner';
import reducer, { initialState } from '../../../store/reducers/taskList';
import * as actionTypes from '../../../store/actions/actionTypes';

configure({ adapter: new Adapter() });

jest.mock('react-redux', () => ({
  useDispatch: () => jest.fn(),
}));

describe('<DeleteConfirmation />', () => {
  let wrapper;
  let state;

  beforeEach(() => {
    state = reducer(initialState, {});
    wrapper = shallow(<DeleteConfirmation />);
  });

  describe('passed loading equal false', () => {
    it('should render two <Button /> if passed loading false', () => {

      expect(wrapper.find(Button)).toHaveLength(2);
    });

    it('should render title <DeleteConfirmation /> modal if passed loading false', () => {
      const title = wrapper.find('.Title');

      expect(title).toHaveLength(1);
    });

    it('should render message <DeleteConfirmation /> modal if passed loading false', () => {
      expect(wrapper.find('.Message')).toHaveLength(1);
    });

    it('should close modal when click on cancel <Button />', () => {

      expect(reducer(state, { type: actionTypes.DECLINE_DELETING.HAS_FETCHED })).toEqual(
        {
          ...state,
          isModalOpen: false,
          isDeleteConfirmationShown: false,
        },
      );
    });

    it('should delete task when click on delete confirmation <Button />', () => {

      expect(reducer(state, { type: actionTypes.DELETE_TASK.HAS_FETCHED })).toEqual(
        {
          ...state,
          isModalOpen: false,
          isDeleteConfirmationShown: false,
          shouldBeDeleteItems: [],
        },
      );
    });
  });

  describe('passed loading equal true', () => {
    it('should render <Spinner /> if passed loading true', () => {
      wrapper.setProps({ loading: true });

      expect(wrapper.find(Spinner)).toHaveLength(1);
    });
  });

  it('should close <DeleteConfirmation /> modal when click on close button', () => {
    const button = wrapper.find('.Close');

    button.simulate('click');

    expect(reducer(state, { type: actionTypes.DECLINE_DELETING.HAS_FETCHED })).toEqual(
      {
        ...state,
        isModalOpen: false,
        isDeleteConfirmationShown: false,
      },
    );
  });
});
