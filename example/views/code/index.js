import styles     from './index.scss'
import React      from 'react'
import CSSModules from 'react-css-modules'
import PropTypes  from 'prop-types'

@CSSModules(styles)
export default class Code extends React.Component {
  static propTypes = {

  }

  static defaultProps = {

  }

  state = {

  }

  render() {
    const {
      ...rest,
    } = this.props

    return <div
      styleName='container'
    >
      Hello World!
    </div>
  }
}
