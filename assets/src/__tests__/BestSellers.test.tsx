//Thomas de Borst 1004302

// test file
import { shallow, mount, render } from 'enzyme';
import React from 'react';
import BestSellers from '/home/tpd3/compx341/aws-bookstore-demo-app/assets/src/modules/bestSellers/BestSellers';
//import Adapter from 'enzyme-adapter-react-16';

const jsdomAlert = window.alert;  // remember the jsdom alert
  window.alert = () => {};  // provide an empty implementation for window.alert

describe('60759790', () => {
  const jsdomAlert = window.alert;  // remember the jsdom alert

  it('h3 should display Top 20 Best Sellers', () => {
    const wrapper = shallow(<BestSellers />);
    const text = wrapper.find('h3');
    expect(text.text()).toEqual('Top 20 best sellers');
  });
  // SUCCESS
  window.alert = jsdomAlert;  // restore the jsdom alert
});

