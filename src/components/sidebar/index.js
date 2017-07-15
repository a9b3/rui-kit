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
      children,
      ...rest,
    } = this.props

    return <aside
      styleName='container'
      {...rest}
    >
      <div>
        {header}
      </div>

      <div styleName='content'>
        {children}
      </div>

      {
        footer && <footer styleName='footer'>
          {footer}
        </footer>
      }
    </aside>
  }
}
