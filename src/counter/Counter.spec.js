// @flow
import React from 'react';
import {findAllWithType, findWithType} from 'react-shallow-testutils';
import ShallowRenderer from 'react-test-renderer/shallow';
import Counter from './Counter';
import Button from '../components/Button';

const renderCounter = () => {
  const renderer = new ShallowRenderer();
  renderer.render(
    <Counter
      count={count}
      incrementCount={incrementCount}
      decrementCount={decrementCount}
    />,
  );
  return renderer.getRenderOutput();
};

let incrementCount: () => void,
  decrementCount: () => void,
  count: number,
  incrementButton = 'Increment',
  decrementButton = 'Decrement';

describe('counter', () => {
  beforeEach(() => {
    incrementCount = jest.fn();
    decrementCount = jest.fn();
    count = 0;
  });
  test('render correctly', () => {
    const result = renderCounter();
    expect(result).toMatchSnapshot();
  });
  test('0 visible and buttonNames are correct', () => {
    const result = renderCounter();
    expect(result.props.children[0].props.buttonName).toEqual(incrementButton);
    expect(result.props.children[1].props.children).toBe(0);
    expect(result.props.children[2].props.buttonName).toEqual(decrementButton);
  });
});
