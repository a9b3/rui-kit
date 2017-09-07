import styles      from './index.scss'
import React       from 'react'
import { Helmet }  from 'react-helmet'

import * as ruiKit from '../../../../src'
import packageJson from '../../../../package.json'

export default class Index extends React.Component {
  render() {
    const keys = Object.keys(ruiKit)
    const exampleText = [
      `import {`,
      '  ' + keys.join(',\n  '),
      `} from 'rui-kit'`,
    ].join('\n')

    return <article
      className={styles.container}
    >
      <Helmet>
        <title>React UI Kit</title>
      </Helmet>

      <h2
        style={{marginBottom: '2rem'}}
      >
        React UI Kit
      </h2>

      <p
        style={{marginBottom: '2rem'}}
      >
        A simple React components library.
      </p>

      <h3>Version</h3>

      <p
        style={{marginBottom: '2rem'}}
      >
        {packageJson.version}
      </p>

      <h3>Install</h3>

      <p
        style={{marginBottom: '2rem'}}
      >
        Use yarn to install the package in an frontend React environment.
      </p>

      <ruiKit.Code
        style={{margin: '2rem 0'}}
      >
        {`yarn add rui-kit --save`}
      </ruiKit.Code>

      <h3
        style={{marginBottom: '2rem'}}
      >
        Exports
      </h3>

      <ruiKit.Code
        type='js'
      >
        {exampleText}
      </ruiKit.Code>
    </article>
  }
}
