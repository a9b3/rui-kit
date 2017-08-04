import styles     from './modal.component.scss'
import React      from 'react'
import PropTypes  from 'prop-types'
import CSSModules from 'react-css-modules'

function ModalComponent({
  children,
  show,
  ...rest
}) {
  if (!show) {
    return null
  }
  return <div
    styleName='modal'
    {...rest}
  >
    {children}
  </div>
}

ModalComponent.propTypes = {
  children: PropTypes.node,
  show    : PropTypes.bool,
}

export default CSSModules(ModalComponent, styles, {allowMultiple: true})
