import styles      from './index.scss'
import React       from 'react'
import CSSModules  from 'react-css-modules'
import * as ruiKit from '../../../src'

@CSSModules(styles)
export default class Index extends React.Component {
  render() {
    return <article>
      <h2>Install</h2>

      <ruiKit.Code>
        {`yarn add rui-kit --save`}
      </ruiKit.Code>

      <p>
        A set of react components.
      </p>

      {
        Object.keys(ruiKit).map(key => {
          return <div key={key}>
            <b>{key}</b>
          </div>
        })
      }
    </article>
  }
}
