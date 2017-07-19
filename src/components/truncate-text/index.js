import styles     from './index.scss'
import React      from 'react'
import CSSModules from 'react-css-modules'
import PropTypes  from 'prop-types'

@CSSModules(styles)
export default class TruncateText extends React.Component {
  static propTypes = {
    children: PropTypes.node,
  }

  render() {
    const {
      children,
      ...rest,
    } = this.props

    return <div
      styleName='container'
      {...rest}
    >
      {children}
    </div>
  }
}
