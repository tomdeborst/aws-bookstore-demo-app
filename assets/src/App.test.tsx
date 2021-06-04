//Thomas de Borst 1004302


import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter, Router } from "react-router-dom"

it('renders without crashing', () => {
  window.alert = jest.fn();
  const div = document.createElement('div');
  ReactDOM.render(
  <BrowserRouter>
    <App />
    </BrowserRouter>, div);
  ReactDOM.unmountComponentAtNode(div);
});

