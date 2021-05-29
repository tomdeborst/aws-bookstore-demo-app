//Thomas de Borst 1004302


import React from 'react';
import ReactDOM from 'react-dom';
import PastPurchases from '/home/tpd3/compx341/aws-bookstore-demo-app/assets/src/modules/pastPurchases/PastPurchases';

describe('App', () => {
  it('renders without crashing', () => {
    window.alert = jest.fn();
    const div = document.createElement('div');
    ReactDOM.render(<PastPurchases />, div);
    //expect(window.alert).toBeCalledWith('RENDERING CORRECTLY');
    //console.log("PastPurchases rending test passed!...")
    ReactDOM.unmountComponentAtNode(div);
  });
});