import styles     from './index.scss'
import CSSModules from 'react-css-modules'
import React      from 'react'
import PropTypes  from 'prop-types'

@CSSModules(styles)
export default class FillParent extends React.Component {
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
