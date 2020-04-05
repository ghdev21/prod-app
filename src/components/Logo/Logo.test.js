import React from 'react';
import { shallow } from 'enzyme';
import Logo from './Logo';

const buildComponent = (newProps) => {
  return shallow(<Logo {...newProps} />);
};

describe('<Logo />', () => {
  let props;

  beforeEach(() => {
    props = { shown: true };
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('Should render <Logo /> if shown property passed', () => {
    const component = buildComponent(props);

    expect(component).not.toBe(null);
  });

  it('Should not render <Logo /> if shown property passed', () => {
    const wrapper = buildComponent();
    const logo = wrapper.find('[data-test="Logo"]');

    expect(logo.exists()).toBe(false);
  });
});
