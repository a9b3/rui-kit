import styles    from './styles.css'

import cx        from 'classnames'
import PropTypes from 'prop-types'
import React     from 'react'

import Loading   from '~/components/Loading'

export default function LoadingOverlay({
  show,
  rgb,
  ...rest
}) {
  if (!show) return null

  return <div
    {...rest}
    className={cx(styles['loading-overlay'], rest.className)}
  >
    <Loading rgb={rgb} show={show} />
  </div>
}
LoadingOverlay.propTypes = {
  show: PropTypes.bool,
  rgb : PropTypes.string,
}
LoadingOverlay.defaultProps = {
  show: false,
}
