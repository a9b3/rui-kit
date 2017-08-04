import styles     from './alert.component.scss'
import React      from 'react'
import PropTypes  from 'prop-types'
import CSSModules from 'react-css-modules'

function AlertComponent({
  show,
  type,
  children,
  ...rest
}) {
  if (!show) {
    return null
  }

  return <div
    styleName={`alert ${type}`}
    {...rest}
  >
    {children}
  </div>
}

AlertComponent.propTypes = {
  show    : PropTypes.bool,
  children: PropTypes.node,
  type    : PropTypes.oneOf(['error', 'positive']),
}

AlertComponent.defaultProps = {
  type: 'error',
}

export default CSSModules(AlertComponent, styles, {allowMultiple: true})
