import React from 'react'
import { render, fireEvent } from 'react-testing-library'
// import Usage from '../exercises-final/10'
import Usage from '../exercises/10'

test('renders upper case first and last name', async () => {
  const { getByLabelText, getByText } = render(<Usage />)
  fireEvent.change(getByLabelText(/first/i), { target: { value: 'first' } })
  getByText(/FIRST/)
  fireEvent.change(getByLabelText(/last/i), { target: { value: 'last' } })
  getByText(/LAST/)
})

//////// Elaboration & Feedback /////////
// When you've finished with the exercises:
// 1. Copy the URL below into your browser and fill out the form
// 2. remove the `.skip` from the test below
// 3. Change submitted from `false` to `true`
// 4. And you're all done!
/*
http://ws.kcd.im/?ws=modern%20react&e=10&em=
*/
test.skip('I submitted my elaboration and feedback', () => {
  const submitted = false // change this when you've submitted!
  expect(submitted).toBe(true)
})
/**
 * Hook: useMemo
 * Deal with unnecessary component re-render issue.
 *
 * Observe browser console logs.
 * When first name counter/last name counter changes, only the corresponding Upper
 * component is re-rendered.
 * However, when we change the input textbox of first name/last name, both Upper
 * components are re-rendered. This is unnecessary.
 * When we added React.memo(function Upper() { ... }), the unnecesary re-render issue
 * is solved.
 */
////////////////////////////////
