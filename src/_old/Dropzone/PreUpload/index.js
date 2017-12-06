import styles    from './styles.scss'
import PropTypes from 'prop-types'
import cx        from 'classnames'

function PreUploadComponent({
  copy,
  ...rest
}) {
  return <div
    {...rest}
    className={cx(styles['pre-upload'], rest.className)}
  >
    {copy}
  </div>
}

PreUploadComponent.propTypes = {
  copy: PropTypes.string,
}

PreUploadComponent.defaultProps = {
  copy: 'Drop files here to upload or choose files',
}

export default PreUploadComponent
