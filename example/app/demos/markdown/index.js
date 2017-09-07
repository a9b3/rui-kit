import { Markdown } from '../../../../src'
import exampleMd    from '!!raw-loader!./example.md'

const description = `
Wrapper around react-markdown.
`.trim()

/* eslint-disable react/jsx-key */
const displayName = 'Markdown'
export default {
  display          : displayName,
  to               : '/markdown',
  demoComponentAttr: {
    header   : displayName,
    component: Markdown,
    description,
    demos    : [
      {
        displayName,
        instance: <Markdown
          source={exampleMd}
        />,
      },
    ],
  },
}
/* eslint-enable react/jsx-key */
