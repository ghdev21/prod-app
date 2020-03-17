import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Button from '../Button';

configure({ adapter: new Adapter });

describe('<Button>', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Button />);
  });

  it('should invoke handler', () => {
    const mockCallBack = jest.fn();
    wrapper.setProps({ clickHandler: mockCallBack });
    wrapper.simulate('click');
    expect(mockCallBack.mock.calls.length).toEqual(1);
  });

  it('should render correct color of button', () => {
    wrapper.setProps({ color: 'Red' });
    expect(wrapper.find('button').hasClass('Red')).toBe(true);
  });
});