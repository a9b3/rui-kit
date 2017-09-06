import styles     from './styles.scss'
import React      from 'react'
import PropTypes  from 'prop-types'
import CSSModules from 'react-css-modules'

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
    styleName='modal'
    {...rest}
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

export default CSSModules(ModalComponent, styles, {allowMultiple: true})
