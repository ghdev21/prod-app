import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Button from '../Button';

configure({ adapter: new Adapter() });

describe('<Button />', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Button />);
  });

  it('Should render <Button /> with passed props', () => {
    wrapper.setProps({ color: 'Blue' });
    expect(wrapper).toHaveLength(1);
  });

  it('Should invoke handler on <Button />', () => {
    const buttonHandler = jest.fn();
    wrapper.setProps({ clickHandler: buttonHandler });
    wrapper.simulate('click');

    expect(buttonHandler).toHaveBeenCalled();
  });

  it('Should render passed text properly <Button />', () => {
    const passedText = 'Test text';
    wrapper.setProps({ children: passedText });
    expect(wrapper.text()).toBe(passedText);
  });
});
