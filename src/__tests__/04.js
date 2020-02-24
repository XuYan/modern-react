import React from 'react'
import { render, fireEvent, flushEffects } from 'react-testing-library'
// import Usage from '../exercises-final/04'
import Usage from '../exercises/04'

afterEach(() => {
  window.localStorage.removeItem('count')
})

test('Usage works', () => {
  window.localStorage.setItem('count', 3)
  const { container } = render(<Usage />)
  const button = container.getElementsByTagName('button')[0]
  expect(button).toHaveTextContent(/3/)
  fireEvent.click(button)
  expect(button).toHaveTextContent(/4/)
  fireEvent.click(button)
  expect(button).toHaveTextContent(/5/)
  flushEffects()
  expect(window.localStorage.getItem('count')).toBe('5')
})

//////// Elaboration & Feedback /////////
// When you've finished with the exercises:
// 1. Copy the URL below into your browser and fill out the form
// 2. remove the `.skip` from the test below
// 3. Change submitted from `false` to `true`
// 4. And you're all done!
/*
http://ws.kcd.im/?ws=modern%20react&e=04&em=
*/
test.skip('I submitted my elaboration and feedback', () => {
  const submitted = false // change this when you've submitted!
  expect(submitted).toBe(true)
})
/**
 * 1. Lazy Initial State:
 * If the initial state is the result of an expensive computation,
 * you may provide a function instead,
 * which will be executed only on the initial render.
 *
 * Lazy Initial State: useState(() => {})
 *
 * 2. useEffects(() => {}, [dependencies])
 * React _only_ calls the effect callback:
 * i. After the first render
 * ii. After a render during which any element in the dependencies array changes.
 * (If there is no array provided, then it is called after every render.)
 *
 * 3. If there are multiple things you need to do, like subscribe some stuff,
 *    send http request, access local storage, etc. Each of these things should
 *    be in their own useEffect callback
 */
////////////////////////////////
