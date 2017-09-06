import styles       from './styles.scss'
import PropTypes    from 'prop-types'

import UploadingRow from './UploadingRow'

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
        return <UploadingRow
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
