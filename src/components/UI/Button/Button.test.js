import React from 'react';
import { shallow } from 'enzyme';
import Button from './Button';

const buildComponent = (newProps) => {
  return shallow(<Button {...newProps} />);
};

describe('<Button />', () => {
  let props;

  beforeEach(() => {
    props = {
      color: 'Blue',
      clickHandler: jest.fn(),
      children: 'test',
    };
  });

  it('Should render <Button /> with passed props', () => {
    const wrapper = buildComponent(props);

    expect(wrapper).not.toBe(null);
  });

  it('Should invoke handler on <Button />', () => {
    const wrapper = buildComponent(props);

    wrapper.simulate('click');
    expect(props.clickHandler).toHaveBeenCalled();
  });

  it('Should render passed text properly <Button />', () => {
    const wrapper = buildComponent(props);

    expect(wrapper.text()).toBe('test');
  });
});
