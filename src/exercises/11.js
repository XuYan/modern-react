// Where to NOT use hooks
import React from 'react'

// Don't make changes to the Usage component. It's here to show you how your
// component is intended to be used and is used in the tests.

function Usage() {
  return <div>When NOT to use hooks (see the final example code)</div>
}
Usage.title = 'Where to NOT use hooks'

export default Usage

/**
 * React Hooks can only be used in function component. You cannot use them in class component.
 * The only place hooks are allowed to be used is in the rendering phase of a function component. DO NOT use hooks in callbacks, etc.
 *
 * DO NOT use hooks conditionally
 * because the order of hooks matter, when Component gets re-rendered, React does not know what’s the right value to return.
 *
 * DO NOT use hooks in loops.
 *
 * Cannot call hooks outside a function body of a function component.
 */