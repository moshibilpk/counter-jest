import { View, Text } from 'react-native'
import React, { useState } from 'react'
import Counter from './src/counter/Counter'

function App() {
  const [count, setCount] = useState(0)

  const incrementCount = () => {
    setCount(previousCount => previousCount + 1)
  }

  const decrementCount = () => {
    count === 0 ? 0 : setCount(previousCount => previousCount - 1)
  }

  return (
    <>
      <Counter
        count={count}
        incrementCount={incrementCount}
        decrementCount={decrementCount}
      />
    </>
  )
}

export default App
