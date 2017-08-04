import React      from 'react'
import PropTypes  from 'prop-types'
import CSSModules from 'react-css-modules'

import styles     from './index.scss'
import Loading    from '../loading'

function LoadingOverlay({
  show,
  loadingAttr,
  ...rest
}) {
  if (!show) {
    return null
  }

  return <div
    styleName='container'
    {...rest}
  >
    <Loading
      {...loadingAttr}
      show={show}
    />
  </div>
}

LoadingOverlay.propTypes = {
  show       : PropTypes.bool,
  loadingAttr: PropTypes.object,
}

LoadingOverlay.defaultProps = {
  show       : false,
  loadingAttr: {},
}

export default CSSModules(LoadingOverlay, styles, {allowMultiple: true})
