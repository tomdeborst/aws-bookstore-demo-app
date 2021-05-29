//Thomas de Borst 1004302


// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from './App';

// it('renders without crashing', () => {
//   const div = document.createElement('div');
//   ReactDOM.render(<App />, div);
//   ReactDOM.unmountComponentAtNode(div);
// });

import React from 'react';
import ReactDOM from 'react-dom';
import App from './PastPurchases';

describe('App', () => {
  it('renders without crashing', () => {
    window.alert = jest.fn();
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    expect(window.alert).toBeCalledWith('X');
    ReactDOM.unmountComponentAtNode(div);
  });
});