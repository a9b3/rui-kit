import { Code } from '../../src'

/* eslint-disable react/jsx-key */
export default {
  display          : 'Code',
  to               : '/code',
  demoComponentAttr: {
    header: `<Code />`,
    demos : [
      <Code>
        {'hi'}
      </Code>,
    ],
    codeSnippetType: 'html',
    codeSnippet    : `
            <Code>
              {'hi'}
            </Code>
          `,
  },
}
/* eslint-enable react/jsx-key */
