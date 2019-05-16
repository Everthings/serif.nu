import { wrapperCreator } from 'util/testing';
import { UnstyledContactPage, styles } from './ContactPage';

describe('ContactPage', () => {
  const getWrapper = wrapperCreator(UnstyledContactPage, undefined, styles);

  it('should render correctly', () => {
    const wrapper = getWrapper();

    expect(wrapper.get(0)).toMatchSnapshot();
  });
});