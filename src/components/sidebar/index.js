import styles     from './index.scss'
import React      from 'react'
import CSSModules from 'react-css-modules'
import PropTypes  from 'prop-types'

@CSSModules(styles)
export default class Sidebar extends React.Component {
  static propTypes = {
    header: PropTypes.node,
    footer: PropTypes.node,
    children: PropTypes.node,
  }

  render() {
    const {
      header,
      footer,
      ...rest,
    } = this.props

    return <div
      styleName='container'
      {...rest}
    >
      {header}

      {this.props.children}

      {
        footer && <div styleName='footer'>
          {footer}
        </div>
      }
    </div>
  }
}
