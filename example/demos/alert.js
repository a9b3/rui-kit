import { Alert }    from '../../src'
import AlertDemo    from './alert-example.js'
import AlertDemoStr from '!!raw-loader!./alert-example.js'

/* eslint-disable react/jsx-key */
export default {
  display          : 'Alert',
  to               : '/alert',
  demoComponentAttr: {
    header   : `<Alert />`,
    component: Alert,
    demos    : [
      {
        instance       : <AlertDemo />,
        codeSnippet    : AlertDemoStr,
        codeSnippetType: 'jsx',
      },
    ],
  },
}
/* eslint-enable react/jsx-key */
