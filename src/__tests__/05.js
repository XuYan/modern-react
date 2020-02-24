import React from 'react'
import VanillaTilt from 'vanilla-tilt'
import { render } from 'react-testing-library'
// import Usage from '../exercises-final/05'
import Usage from '../exercises/05'

beforeEach(() => {
  jest.spyOn(VanillaTilt, 'init')
})

afterEach(() => {
  VanillaTilt.init.mockRestore()
})

test('calls VanillaTilt.init with the root node', () => {
  const { container } = render(<Usage />)
  expect(container.querySelector('.tilt-root')).toHaveProperty('vanillaTilt')
  expect(VanillaTilt.init).toHaveBeenCalledTimes(1)
})

//////// Elaboration & Feedback /////////
// When you've finished with the exercises:
// 1. Copy the URL below into your browser and fill out the form
// 2. remove the `.skip` from the test below
// 3. Change submitted from `false` to `true`
// 4. And you're all done!
/*
http://ws.kcd.im/?ws=learn%20react&e=05&em=
*/
test.skip('I submitted my elaboration and feedback', () => {
  const submitted = false // change this when you've submitted!
  expect(submitted).toBe(true)
})
/**
 * 1. Hook useRef:
 * const node = useRef(defaultValue)
 * console.log(node.current) // => defaultValue
 * node.current doesn't have to be a DOM node. It can hold anything!
 *
 * 2. The way to clean up an effect is to make sure
 *    the function passed to useEffect/useLayoutEffect returns a clean-up function.
 *
 * 3. const ref = React.createRef()
 *    console.log(ref.current) // => null
 *
 * 4. componentDidMount and componentDidUpdate run synchronously right after the render.
 *    useEffect callback will be scheduled asynchronously to happen after render.
 *    Similarly, useLayoutEffect runs synchronously after render.
 *    The best practice is, if your effect callback manipulate the DOM in an observable way,
 *    you should use useLayoutEffect. Otherwise, you may see flicker in your web app. The downside of useLayoutEffect is the callback is blocking rendering. The user won’t see the rendered stuff until the callback is finished.
 */
////////////////////////////////
