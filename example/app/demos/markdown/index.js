import exampleMd    from '!!raw-loader!./example.md'
import { Markdown } from '../../../../src'
import doc          from 'components/DocPage/doc'

const description = `
Wrapper around remarkable.
`.trim()

export default doc({
  component: Markdown,
  display  : 'Markdown',
  to       : '/markdown',
  sections : [
    {
      header  : 'Markdown',
      description,
      sections: [
        {
          demo: <Markdown
            source={exampleMd}
          />,
        },
      ],
    },
  ],
})
