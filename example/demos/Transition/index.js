import {Transition}      from '../../../src'
import TransitionDemo    from './demo.js'
import TransitionDemoStr from '!!raw-loader!./demo.js'

const description = `
Transition HOC.
`.trim()

/* eslint-disable react/jsx-key */
const displayName = 'Transition'
export default {
  display          : displayName,
  to               : '/transition',
  demoComponentAttr: {
    header   : displayName,
    component: Transition,
    description,
    demos    : [
      {
        displayName,
        instance       : <TransitionDemo />,
        codeSnippet    : TransitionDemoStr,
        codeSnippetType: 'jsx',
      },
    ],
  },
}
/* eslint-enable react/jsx-key */
