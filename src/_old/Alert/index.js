import styles    from './styles.scss'
import cx        from 'classnames'
import PropTypes from 'prop-types'
import React     from 'react'

export default function AlertComponent({
  children,
  close,
  show,
  type,
  ...rest
}) {
  if (!show) {
    return null
  }
  return <div
    onClick={close}
    {...rest}
    className={cx(
      'rui--alert',
      styles.alert,
      styles[type],
      rest.className
    )}
  >
    {children}
  </div>
}
AlertComponent.propTypes = {
  children: PropTypes.node,
  close   : PropTypes.func,
  show    : PropTypes.bool,
  type    : PropTypes.oneOf(['error', 'positive']),
}
AlertComponent.defaultProps = {
  type: 'error',
}
