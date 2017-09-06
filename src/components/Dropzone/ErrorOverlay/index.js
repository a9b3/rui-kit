import styles    from './styles.scss'
import PropTypes from 'prop-types'

function ErrorOverlayComponent({
  error,
  ...rest
}) {
  return <div
    styleName='error'
    {...rest}
  >
    {error.message}
  </div>
}

ErrorOverlayComponent.propTypes = {
  error: PropTypes.any.isRequired,
}

export default cssModule(ErrorOverlayComponent, styles, {allowMultiple: true})
