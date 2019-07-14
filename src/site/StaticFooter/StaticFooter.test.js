import React from 'react';
import ReactDOM from 'react-dom';
import StaticFooter from './';

describe('render', () => {

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<StaticFooter />, div);
    ReactDOM.unmountComponentAtNode(div);
  })

})