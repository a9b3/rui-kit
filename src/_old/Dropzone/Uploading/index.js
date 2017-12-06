import styles       from './styles.scss'
import PropTypes    from 'prop-types'
import cx           from 'classnames'

import UploadingRow from './UploadingRow'

function UploadingComponent({
  progress,
  ...rest
}) {

  return <div
    {...rest}
    className={cx(styles.uploading, rest.className)}
  >
    {
      progress.map((p) => <UploadingRow
        key={p.file.id}
        progress={p}
      />)
    }
  </div>
}

UploadingComponent.propTypes = {
  progress: PropTypes.arrayOf(PropTypes.shape({
    percent: PropTypes.number.isRequired,
    file   : PropTypes.any.isRequired,
  })),
}

export default UploadingComponent
