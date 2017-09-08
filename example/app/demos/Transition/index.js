import doc from 'components/DocPage/doc'
import {Transition}      from '../../../../src'
import TransitionDemo    from './demo.js'
import TransitionDemoStr from '!!raw-loader!./demo.js'

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
