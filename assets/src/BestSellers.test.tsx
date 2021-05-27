// test file
import { shallow, mount, render } from 'enzyme';
import React from 'react';
//import Adapter from 'enzyme-adapter-react-16';
import { configure } from 'enzyme';

import BestSellers from './modules/bestSellers/BestSellers';
import Adapter from 'enzyme-adapter-react-16';


describe('60759790', () => {
  it('should render text for h3', () => {
    const wrapper = shallow(<BestSellers />);
    const text = wrapper.find('h3');
    expect(text.text()).toEqual('Top 20 best sellers');
  });
});

