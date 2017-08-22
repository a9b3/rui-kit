import { Code } from '../../src'

/* eslint-disable react/jsx-key */
const displayName = 'Code'
export default {
  display          : displayName,
  to               : '/code',
  demoComponentAttr: {
    header     : displayName,
    description: 'Display code with syntax highlighting.',
    component  : Code,
    demos      : [
      {
        displayName,
        instance: <Code>
          {'hi'}
        </Code>,
      },
      {
        displayName,
        instance: <Code type='js'>
          {`const foo = 'foo'`}
        </Code>,
      },
      {
        displayName,
        instance: <Code type='html'>
          {`<html></html>`}
        </Code>,
      },
    ],
  },
}
/* eslint-enable react/jsx-key */
