import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Logo from '../Logo';

configure({ adapter: new Adapter() });

describe('<Logo />', () => {

  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Logo />);
  });

  it('Should render <Logo /> if shown property passed', () => {
    wrapper.setProps({ shown: true });
    const logo = wrapper.find('.Logo');

    expect(logo).toHaveLength(1);
  });

  it('Should not render <Logo /> if shown property passed', () => {
    const wrapper = shallow(<Logo />);
    const logo = wrapper.find('.Logo');

    expect(logo).toHaveLength(0);
  });
});
