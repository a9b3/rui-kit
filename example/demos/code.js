import { Code } from '../../src'

export default {
  display: 'Code',
  to: '/code',
  demoComponentAttr: {
    header: `<Code />`,
    demos: [
      <Code>
        {'hi'}
      </Code>,
    ],
    codeSnippetType: 'html',
    codeSnippet: `
            <Code>
              {'hi'}
            </Code>
          `,
  },
}
