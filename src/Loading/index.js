import styles    from './styles.css'

import cx        from 'classnames'
import PropTypes from 'prop-types'
import React     from 'react'

export default function Loading({ show, ...props }) {
  if (!show) {
    return null
  }

  return <i {...props} className={cx(styles.loading, props.className)} />
}
Loading.propTypes = {
  show: PropTypes.bool,
  className: PropTypes.string,
}
Loading.defaultProps = {
  show: true,
}
