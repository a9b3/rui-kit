import styles     from './index.scss'
import React      from 'react'
import CSSModules from 'react-css-modules'

@CSSModules(styles)
export default class Index extends React.Component {
  render() {
    return <div>
      Index
    </div>
  }
}
