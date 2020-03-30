import React from 'react';
import { shallow } from 'enzyme';
import DeleteConfirmation from '../DeleteConfirmation';
import Button from '../../UI/Button/Button';
import Spinner from '../../UI/Spinner/Spinner';

jest.mock('react-redux', () => ({
  useDispatch: () => jest.fn(),
}));

const buildComponent = (newProps) => {
  return shallow(<DeleteConfirmation {...newProps} />);
};

describe('<DeleteConfirmation />', () => {
  let props;

  beforeEach(() => {
    props = {
      loading: true,
    };
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('passed loading equal false', () => {
    it('should render two <Button /> if passed loading false', () => {
      const component = buildComponent();
      const buttons = component.find(Button);

      expect(buttons).toHaveLength(2);
    });

    it('should render title <DeleteConfirmation /> modal if passed loading false', () => {
      const component = buildComponent();
      const title = component.find('[data-test="Title"]');

      expect(title).not.toBe(null);
    });

    it('should render message <DeleteConfirmation /> modal if passed loading false', () => {
      const component = buildComponent();
      const message = component.find('[data-test="Message"]');

      expect(message).not.toBe(null);
    });
  });

  describe('passed loading equal true', () => {
    it('should render <Spinner /> if passed loading true', () => {
      const component = buildComponent(props);
      const spinner = component.find(Spinner);

      expect(spinner).not.toBe(null);
    });

    it('should render close button if passed loading true', () => {
      const component = buildComponent(props);
      const spinner = component.find('[data-test="Close button"]');

      expect(spinner).not.toBe(null);
    });
  });
});
