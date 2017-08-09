import { InitWrapper } from '../../src'
import {timeoutAsync}  from '../helpers.js'

/* eslint-disable react/jsx-key */
export default {
  display          : 'InitWrapper',
  to               : '/init-wrapper',
  demoComponentAttr: {
    header: `<InitWrapper />`,
    demos : [
      <InitWrapper
        style={{height: '200px'}}
        init={timeoutAsync}
      >
        Loaded
      </InitWrapper>,
      <InitWrapper
        style={{height: '200px'}}
        init={() => {
          throw new Error('hi')
        }}
      >
        Loaded
      </InitWrapper>,
    ],
    codeSnippetType: 'jsx',
    codeSnippet    : `
      <InitWrapper
        style={{height: '200px'}}
        init={timeoutAsync}
      >
        Loaded
      </InitWrapper>

      <InitWrapper
        style={{height: '200px'}}
        init={() => {
          throw new Error('hi')
        }}
      >
        Loaded
      </InitWrapper>
          `,
  },
}
/* eslint-enable react/jsx-key */
