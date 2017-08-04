import { Alert } from '../../src'

export default {
  display          : 'Alert',
  to               : '/alert',
  demoComponentAttr: {
    header: `<Alert />`,
    demos : [
      <Alert
        show
        style={{margin: '2rem 0'}}
      >
        {'hi'}
      </Alert>,
      <Alert
        show
        type='positive'
        style={{margin: '2rem 0'}}
      >
        {'hi'}
      </Alert>,
    ],
    codeSnippetType: 'html',
    codeSnippet    : `
      <Alert
        show
        style={{margin: '2rem 0'}}
      >
        {'hi'}
      </Alert>

      <Alert
        show
        type='positive'
        style={{margin: '2rem 0'}}
      >
        {'hi'}
      </Alert>
          `,
  },
}
