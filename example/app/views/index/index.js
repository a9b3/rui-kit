import styles from './index.css'
import React from 'react'
import { Helmet } from 'react-helmet'

import packageJson from '../../../../package.json'
import * as ruiKit from '../../../../src'

export default class Index extends React.Component {
  render() {
    const keys = Object.keys(ruiKit)
    const exampleText = [
      `import {`,
      '  ' + keys.join(',\n  '),
      `} from 'rui-kit'`,
    ].join('\n')

    return (
      <article className={styles.container}>
        <Helmet>
          <title>React UI Kit</title>
        </Helmet>

        <h2>React UI Kit</h2>
        <p>A React components library.</p>

        <p>{packageJson.version}</p>

        <h3>Install</h3>
        <p style={{ marginBottom: '2rem' }}>
          Use yarn to install the package in an frontend React environment.
        </p>

        <ruiKit.Code style={{ margin: '2rem 0' }}>
          {`yarn add rui-kit --save`}
        </ruiKit.Code>

        <h3 style={{ marginBottom: '2rem' }}>Exports</h3>

        <ruiKit.Code type="js">{exampleText}</ruiKit.Code>
      </article>
    )
  }
}
