import CollapseDemoStr from '!!raw-loader!./demo.js'
import CollapseDemo    from './demo.js'
import doc             from 'components/DocPage/doc'

const description = `
Collapse
`.trim()

const displayName = 'Collapse'

export default doc({
  display : displayName,
  to      : '/collapse',
  sections: [
    {
      header  : displayName,
      description,
      sections: [
        {
          demo        : <CollapseDemo />,
          overrideDemo: {
            codeSnippet    : CollapseDemoStr,
            codeSnippetType: 'jsx',
          },
        },
      ],
    },
  ],
})
