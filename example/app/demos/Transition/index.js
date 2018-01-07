import TransitionDemoStr from '!!raw-loader!./demo.js'
import {Transition}      from '../../../../src'
import TransitionDemo    from './demo.js'
import doc               from 'components/DocPage/doc'

const description = `
Transition HOC.
`.trim()

const displayName = 'Transition'

export default doc({
  display : displayName,
  to      : '/transition',
  sections: [
    {
      header  : displayName,
      description,
      sections: [
        {
          demo        : <TransitionDemo />,
          overrideDemo: {
            codeSnippet    : TransitionDemoStr,
            codeSnippetType: 'jsx',
          },
        },
      ],
    },
  ],
})
