import styles    from './styles.scss'
import PropTypes from 'prop-types'
import cx        from 'classnames'

function ErrorOverlayComponent({
  error,
  ...rest
}) {
  return <div
    {...rest}
    className={cx(styles.error, rest.className)}
  >
    {error.message}
  </div>
}

ErrorOverlayComponent.propTypes = {
  error: PropTypes.any.isRequired,
}

export default ErrorOverlayComponent
