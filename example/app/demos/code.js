import doc      from 'components/DocPage/doc'
import { Code } from '../../../src'

export default doc({
  component: Code,
  to       : '/code',
  display  : 'Code',
  sections : [
    {
      header     : 'Code',
      description: 'Display code with syntax highlighting.',
      sections   : [
        {
          demo: <Code>
            {'hi'}
          </Code>,
          overrideDemo: {
            displayName: 'Code',
          },
        },
        {
          demo: <Code type='js'>
            {`const foo = 'foo'`}
          </Code>,
          overrideDemo: {
            displayName: 'Code',
          },
        },
        {
          demo: <Code type='html'>
            {`<html></html>`}
          </Code>,
          overrideDemo: {
            displayName: 'Code',
          },
        },
      ],
    },
  ],
})
