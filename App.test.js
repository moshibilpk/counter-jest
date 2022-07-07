// @flow
import React from 'react';
import {findAllWithType, findWithType} from 'react-shallow-testutils';
import ShallowRenderer from 'react-test-renderer/shallow';
import App from './App';
import Counter from './src/counter/Counter';

const renderApp = () => {
  const renderer = new ShallowRenderer();
  renderer.render(<App />);
  return renderer.getRenderOutput();
};

describe('App Component', () => {
  test('render correctly', () => {
    const result = renderApp();
    expect(result).toMatchSnapshot();
  });
  test('button press', () => {
    const result = renderApp();
    const button = findWithType(result, Counter);
    button.props.incrementCount();
    button.props.decrementCount();
    // console.log('🚀 ~ file: App.test.js ~ line 22 ~ test ~ button', button);
  });
});
