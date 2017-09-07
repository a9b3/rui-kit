import styles    from './styles.scss'
import React     from 'react'
import PropTypes from 'prop-types'
import cx        from 'classnames'

import Loading   from '~/components/Loading'

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
    {...rest}
    className={cx(styles.container, rest.className)}
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

export default LoadingOverlay
