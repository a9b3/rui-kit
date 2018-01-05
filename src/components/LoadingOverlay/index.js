import styles    from './styles.css'

import cx        from 'classnames'
import PropTypes from 'prop-types'
import React     from 'react'

import Loading   from '~/components/Loading'

export default function LoadingOverlay({show, rgb, ...props}) {
  if (!show) return null

  return <div
    {...props}
    className={cx(styles['loading-overlay'], props.className)}
  >
    <Loading rgb={rgb} show={show} />
  </div>
}
LoadingOverlay.propTypes = {
  show     : PropTypes.bool,
  rgb      : PropTypes.string,
  className: PropTypes.string,
}
LoadingOverlay.defaultProps = {
  show: false,
}
