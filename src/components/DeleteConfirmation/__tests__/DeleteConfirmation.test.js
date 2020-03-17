import React from 'react';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import DeleteConfirmation from '../DeleteConfirmation';
import Button from '../../UI/Button/Button';
import Spinner from '../../UI/Spinner/Spinner';

configure({ adapter: new Adapter() });

describe('<DeleteConfirmation />', () => {
  const initialState = {
    taskList: {
      loading: false,
    },
  };
  const mockStore = configureStore();
  const store = mockStore(initialState);

  it('should render </Button> if loading false', () => {
    const wrapper = mount(
      <Provider store={store}>
        <DeleteConfirmation />
      </Provider>,
    );
    expect(wrapper.find(Button)).toHaveLength(2);
  });

  it('should render </Spinner> if loading true', () => {
    const wrapper = mount(
      <Provider store={store}>
        <DeleteConfirmation loading />
      </Provider>,
    );
    expect(wrapper.find(Spinner)).toHaveLength(1);
  });
});
