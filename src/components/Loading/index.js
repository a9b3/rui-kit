import styles    from './style.css'

import cx        from 'classnames'
import PropTypes from 'prop-types'
import React     from 'react'

export default function Loading({rgb, show, ...rest}) {
  if (!show) {
    return null
  }

  return <div
    {...rest}
    className={cx(styles.loading, rest.className)}
    style={{
      ['--loading-color']: rgb,
      ...rest.style,
    }}
  />
}
Loading.propTypes = {
  rgb : PropTypes.string,
  show: PropTypes.bool,
}
Loading.defaultProps = {
  show: true,
}
