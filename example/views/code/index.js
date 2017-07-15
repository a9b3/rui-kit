import styles     from './index.scss'
import React      from 'react'
import CSSModules from 'react-css-modules'

@CSSModules(styles)
export default class Code extends React.Component {
  render() {
    return <div
      styleName='container'
    >
      Hello World!
    </div>
  }
}
