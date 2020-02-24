// Counter: custom hooks
import React, { useState } from 'react'

// 🐨 create a function here called useCounter
// the "use" prefix is a convention, and not required.
// don't overthink this. It's JavaScript :)
// 💰 make sure to export it for the tests.
export function useCounter(initialCount = 0) {
  const [count, setCount] = useState(initialCount)
  return {
    count: count,
    incrementCount: () => setCount(count + 1)
  }
}

function Counter() {
  // 🐨 move these two lines to your function and return what you need
  const { count, incrementCount } = useCounter(0)
  return <button onClick={incrementCount}>{count}</button>
}

// Don't make changes to the Usage component. It's here to show you how your
// component is intended to be used and is used in the tests.

function Usage() {
  return <Counter />
}
Usage.title = 'Counter: custom hooks'

export default Usage
