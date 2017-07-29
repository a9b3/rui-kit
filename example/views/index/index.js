import styles        from './index.scss'
import React         from 'react'
import CSSModules    from 'react-css-modules'
import { Helmet }    from 'react-helmet'
import * as ruiKit   from '../../../src'
import { alignText } from 'js-functions'

@CSSModules(styles)
export default class Index extends React.Component {
  render() {
    const keys = Object.keys(ruiKit)
    const exampleText = [
      `import {`,
      '  ' + keys.join(',\n  '),
      `} from 'rui-kit'`,
    ].join('\n')

    return <article>
      <Helmet>
        <title>React UI Kit</title>
      </Helmet>

      <p>
        A set of unstyled react components, intended to be as generic as possible so you can style it how you want.
      </p>

      <h2>Install</h2>

      <ruiKit.Code
        style={{margin: '2rem 0'}}
      >
        {`yarn add rui-kit --save`}
      </ruiKit.Code>

      <ruiKit.Code
        type='js'
      >
        {exampleText}
      </ruiKit.Code>
    </article>
  }
}
