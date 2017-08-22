import { Alert }    from '../../src'
import AlertDemo    from './alert-example.js'
import AlertDemoStr from '!!raw-loader!./alert-example.js'

/* eslint-disable react/jsx-key */
const displayName = 'Alert'
export default {
  display          : displayName,
  to               : '/alert',
  demoComponentAttr: {
    header     : displayName,
    component  : Alert,
    description: 'An alert toast.',
    demos      : [
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
