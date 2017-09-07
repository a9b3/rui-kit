import styles    from './styles.scss'
import React     from 'react'
import PropTypes from 'prop-types'
import cx        from 'classnames'

function ModalComponent({
  children,
  show,
  backgroundColor,
  ...rest
}) {
  if (!show) {
    return null
  }
  return <div
    {...rest}
    className={cx(styles.modal, rest.className)}
    style={Object.assign({}, rest.styles, {
      backgroundColor,
    })}
  >
    {children}
  </div>
}

ModalComponent.propTypes = {
  children       : PropTypes.node,
  show           : PropTypes.bool,
  backgroundColor: PropTypes.string,
}

export default ModalComponent
