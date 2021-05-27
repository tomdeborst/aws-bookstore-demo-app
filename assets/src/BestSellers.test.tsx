import Enzyme, { shallow } from 'enzyme';
import react from 'react';
import Adapter from 'enzyme-adapter-react-16';
import BestSellers from './BestSellers.tsx';

Enzyme.configure({ adapter: new Adapter() });

describe('60759790', () => {
  it('should render text for h3', () => {
    const wrapper = shallow(<BestSellers />);
    const text = wrapper.find('h3');
    expect(text.text()).to.equal('Top 20 best sellers');
  });
});