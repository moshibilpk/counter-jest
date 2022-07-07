// @flow
import {View, TouchableHighlight, Text, StyleSheet} from 'react-native';
import React from 'react';
import type {Element} from 'react';
import Button from '../components/Button';
import type {Node} from 'react';

type PropsType = {|
  incrementCount?: () => Promise<void> | void,
  decrementCount?: () => Promise<void> | void,
  count: number,
|};

const Counter = ({count, incrementCount, decrementCount}: PropsType): Node => {
  return (
    <View style={styles.container}>
      <Button buttonName={'Increment'} onPress={incrementCount} />
      <Text style={styles.counter}>{count}</Text>
      {count !== 0 ? (
        <Button buttonName={'Decrement'} onPress={decrementCount} />
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  counter: {
    fontSize: 20,
    color: '#000',
    margin: 5,
  },
});

export default Counter;
