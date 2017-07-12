import styles     from './index.scss'
import React      from 'react'
import CSSModules from 'react-css-modules'
import PropTypes  from 'prop-types'

@CSSModules(styles)
export default class LeftMiddleRight extends React.Component {
  static propTypes = {
    left: PropTypes.node,
    middle: PropTypes.node,
    right: PropTypes.node,
    style: PropTypes.object,
  }

  render() {
    const {
      left,
      middle,
      right,
      style,
      ...rest,
    } = this.props

    return <div
      styleName='container'
      {...rest}
      style={Object.assign({}, style)}
    >

      <div
        styleName='left'
      >
        {left}
      </div>

      <div
        styleName='middle'
      >
        {middle}
      </div>

      <div
        styleName='right'
      >
        {right}
      </div>

    </div>
  }
}
