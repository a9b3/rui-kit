import styles                from './uploading.component.scss'
import PropTypes             from 'prop-types'

import UploadingRowComponent from './uploading-row.component.js'

function UploadingComponent({
  progress,
  ...rest
}) {

  return <div
    styleName='uploading'
    {...rest}
  >
    {
      progress.map((p) => {
        return <UploadingRowComponent
          key={p.file.id}
          progress={p}
        />
      })
    }
  </div>
}

UploadingComponent.propTypes = {
  progress: PropTypes.arrayOf(PropTypes.shape({
    percent: PropTypes.number.isRequired,
    file   : PropTypes.any.isRequired,
  })),
}

export default cssModule(UploadingComponent, styles, {allowMultiple: true})
