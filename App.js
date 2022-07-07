//@flow

import {View, Text} from 'react-native';
import React, {useState} from 'react';
import Counter from './src/counter/Counter';
import type {Node} from 'react';

type OwnPropType = {|
  incrementCount?: () => Promise<void> | void,
  decrementCount?: () => Promise<void> | void,
  count: number,
|};

function App(): Node {
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount(previousCount => previousCount + 1);
  };

  const decrementCount = () => {
    setCount(previousCount => previousCount - 1);
  };

  return (
    <>
      <Counter
        count={count}
        incrementCount={incrementCount}
        decrementCount={decrementCount}
      />
    </>
  );
}

export default App;
