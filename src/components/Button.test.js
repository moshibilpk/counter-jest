// @flow

import React from 'react';
import {Text, TouchableHighlight} from 'react-native';
import {findAllWithType, findWithType} from 'react-shallow-testutils';
import ShallowRenderer from 'react-test-renderer/shallow';
import Button from './Button';

const renderer = new ShallowRenderer();

let buttonName: string, onPress: () => void;

describe('button for counter', () => {
  beforeEach(() => {
    buttonName = 'buttonName';
    onPress = jest.fn();
  });

  test('renders correctly', () => {
    renderer.render(<Button onPress={onPress} buttonName={buttonName} />);
    const result = renderer.getRenderOutput();
    expect(result).toMatchSnapshot();
  });

  test('renders button with correct name', () => {
    renderer.render(<Button onPress={onPress} buttonName={buttonName} />);
    const result = renderer.getRenderOutput();
    const text = findWithType(result, Text);
    expect(text.props.children).toBe(buttonName);
  });

  it('renders button with correct action', () => {
    renderer.render(<Button onPress={onPress} buttonName={buttonName} />);
    const result = renderer.getRenderOutput();
    const button = findWithType(result, TouchableHighlight);
    button.props.onPress();
    expect(typeof button.props.onPress).toBe('function');
  });
});
