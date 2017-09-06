import React      from 'react'
import PropTypes  from 'prop-types'
import CSSModules from 'react-css-modules'

import styles     from './styles.scss'

function Sidebar({
  header,
  footer,
  children,
  ...rest
}) {
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

Sidebar.propTypes = {
  header  : PropTypes.node,
  footer  : PropTypes.node,
  children: PropTypes.node,
}

export default CSSModules(Sidebar, styles, {allowMultiple: true})
