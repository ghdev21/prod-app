import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import PlusBtn from '../PlusBtn';

configure({ adapter: new Adapter() });

describe('<PlusBtn />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<PlusBtn />);
  });

  it('Should render <PlusBtn />', () => {
    const button = wrapper.find('.Button');

    expect(button).toHaveLength(1);
  });

  it('Should invoke passed function <PlusBtn />', () => {
    const showModalHandler = jest.fn();

    wrapper.setProps({ showModal: showModalHandler });
    wrapper.simulate('click');

    expect(showModalHandler).toHaveBeenCalled();
  });
});
