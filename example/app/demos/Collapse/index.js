import doc             from 'components/DocPage/doc'
import CollapseDemo    from './demo.js'
import CollapseDemoStr from '!!raw-loader!./demo.js'

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
