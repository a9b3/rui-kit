import styles    from './styles.css'

import cx        from 'classnames'
import PropTypes from 'prop-types'
import React     from 'react'

export default function Loading({ show, ...props }) {
  return show ? (
    <i {...props} className={cx(styles.loading, props.className)} />
  ) : null
}
Loading.propTypes = {
  show: PropTypes.bool,
  className: PropTypes.string,
}
Loading.defaultProps = {
  show: true,
}
