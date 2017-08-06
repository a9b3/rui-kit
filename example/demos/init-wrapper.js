import { InitWrapper } from '../../src'

import {timeoutAsync}  from '../helpers.js'

class InitWrapperExample extends React.Component {
  render() {
    return <InitWrapper
      style={{height: '200px'}}
      init={timeoutAsync}
    >
      Loaded
    </InitWrapper>
  }
}

export default {
  display          : 'InitWrapper',
  to               : '/init-wrapper',
  demoComponentAttr: {
    header: `<InitWrapper />`,
    demos : [
      <InitWrapperExample />,
    ],
    codeSnippetType: 'jsx',
    codeSnippet    : `

          `,
  },
}
