import styles     from './styles.scss'
import React      from 'react'
import PropTypes  from 'prop-types'
import CSSModules from 'react-css-modules'

import Loading    from '~/components/Loading'

function LoadingOverlay({
  show,
  color,
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
      color={color}
      {...loadingAttr}
      show={show}
    />
  </div>
}

LoadingOverlay.propTypes = {
  show       : PropTypes.bool,
  color      : PropTypes.string,
  loadingAttr: PropTypes.object,
}

LoadingOverlay.defaultProps = {
  show       : false,
  loadingAttr: {},
}

export default CSSModules(LoadingOverlay, styles, {allowMultiple: true})
