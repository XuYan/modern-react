import React from 'react'
import { render, fireEvent } from 'react-testing-library'
// import Usage, {useCounter} from '../exercises-final/02'
import Usage, { useCounter } from '../exercises/02'

test('Usage works', () => {
  const { container } = render(<Usage />)
  const button = container.getElementsByTagName('button')[0]
  expect(button).toHaveTextContent(/0/)
  fireEvent.click(button)
  expect(button).toHaveTextContent(/1/)
  fireEvent.click(button)
  expect(button).toHaveTextContent(/2/)
})

test('useCounter works', () => {
  function Test() {
    const { count, incrementCount } = useCounter(2)
    return <button onClick={incrementCount}>{count}</button>
  }
  const { container } = render(<Test />)
  const button = container.getElementsByTagName('button')[0]
  expect(button).toHaveTextContent(/2/)
  fireEvent.click(button)
  expect(button).toHaveTextContent(/3/)
  fireEvent.click(button)
  expect(button).toHaveTextContent(/4/)
})

//////// Elaboration & Feedback /////////
// When you've finished with the exercises:
// 1. Copy the URL below into your browser and fill out the form
// 2. remove the `.skip` from the test below
// 3. Change submitted from `false` to `true`
// 4. And you're all done!
/*
http://ws.kcd.im/?ws=modern%20react&e=02&em=
*/
test.skip('I submitted my elaboration and feedback', () => {
  const submitted = false // change this when you've submitted!
  expect(submitted).toBe(true)
})
/**
 * 1. The name of the custom hook doesn't matter that much.
 *    To follow React Hook's naming convention and make use of linting rules,
 *    we usually name it with a 'use' prefix.
 * 2. Use custom hook to extract the logic we want to reuse.
 * 3. How does setCount causes the whole component to re-render?
 *    React internally tracks which hooks is used in which component.
 *    When a hook's value is changed, the component is re-rendered.
 *    useState call will return a brand-new [ count, setCount ] with count
 *    as the current value.
 */
////////////////////////////////
