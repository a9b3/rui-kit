import styles    from './styles.scss'
import React     from 'react'
import PropTypes from 'prop-types'
import cx        from 'classnames'

function AlertComponent({
  show,
  type,
  children,
  close,
  ...rest
}) {
  if (!show) {
    return null
  }

  return <div
    onClick={close}
    {...rest}
    className={cx('rui--alert', styles.alert, styles[type], rest.className)}
  >
    {children}
  </div>
}

AlertComponent.propTypes = {
  show    : PropTypes.bool,
  children: PropTypes.node,
  type    : PropTypes.oneOf(['error', 'positive']),
  close   : PropTypes.func,
}

AlertComponent.defaultProps = {
  type: 'error',
}

export default AlertComponent
