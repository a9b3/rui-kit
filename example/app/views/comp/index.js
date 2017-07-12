import styles     from './index.scss'
import React      from 'react'
import CSSModules from 'react-css-modules'

@CSSModules(styles)
export default class Comp extends React.Component {
  static propTypes = {

  }

  static defaultProps = {

  }

  state = {

  }

  render() {
    return <div
      styleName='container'
    >
      Hello World!
    </div>
  }
}
