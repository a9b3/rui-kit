import { Code } from '../../src'

/* eslint-disable react/jsx-key */
export default {
  display          : 'Code',
  to               : '/code',
  demoComponentAttr: {
    header   : `<Code />`,
    component: Code,
    demos    : [
      {
        instance: <Code>
          {'hi'}
        </Code>,
      },
    ],
  },
}
/* eslint-enable react/jsx-key */
