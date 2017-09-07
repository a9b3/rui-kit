import { Alert }    from '../../../src'
import AlertDemo    from './alert-example.js'
import AlertDemoStr from '!!raw-loader!./alert-example.js'

const description = `
A simple alert toast component. Keep track of the open/closed state of the toast in the consuming container.
`.trim()

/* eslint-disable react/jsx-key */
const displayName = 'Alert'
export default {
  display          : displayName,
  to               : '/alert',
  demoComponentAttr: {
    header   : displayName,
    component: Alert,
    description,
    demos    : [
      {
        displayName,
        instance       : <AlertDemo />,
        codeSnippet    : AlertDemoStr,
        codeSnippetType: 'jsx',
      },
    ],
  },
}
/* eslint-enable react/jsx-key */
