import doc          from 'components/DocPage/doc'
import { Markdown } from '../../../../src'
import exampleMd    from '!!raw-loader!./example.md'

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
