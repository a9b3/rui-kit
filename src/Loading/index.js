import styles    from './styles.css'

import cx        from 'classnames'
import PropTypes from 'prop-types'
import React     from 'react'

export default function Loading({ rgb, show, ...props }) {
  if (!show) {
    return null
  }

  return (
    <div
      {...props}
      className={cx(styles.loading, props.className)}
      style={{
        ['--loadingColor']: rgb,
        ...props.style,
      }}
    />
  )
}
Loading.propTypes = {
  rgb: PropTypes.string,
  show: PropTypes.bool,
  className: PropTypes.string,
  style: PropTypes.object,
}
Loading.defaultProps = {
  show: true,
}
