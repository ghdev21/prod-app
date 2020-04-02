import React from 'react';
import { shallow } from 'enzyme';
import PlusBtn from './PlusBtn';

const buildComponent = (newProps) => {
  return shallow(<PlusBtn {...newProps} />);
};

describe('<PlusBtn />', () => {
  let props;

  beforeEach(() => {
    props = {
      showModal: jest.fn(),
    };
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should render into the document', () => {
    const component = buildComponent(props);

    expect(component).not.toBe(null);
  });

  it('Should invoke passed function <PlusBtn />', () => {
    const component = buildComponent(props);
    component.simulate('click');

    expect(props.showModal).toHaveBeenCalled();
  });
});
