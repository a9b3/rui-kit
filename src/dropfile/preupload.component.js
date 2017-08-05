import styles     from './preupload.component.scss'
import PropTypes  from 'prop-types'

function PreUploadComponent({
  copy,
  ...rest
}) {
  return <div
    styleName='pre-upload'
    {...rest}
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

export default cssModule(PreUploadComponent, styles, {allowMultiple: true})
