import styles              from './styles.scss'
import PropTypes           from 'prop-types'
import {humanReadableSize} from 'js-functions'
import cx                  from 'classnames'

import ProgressBar         from '~/components/ProgressBar'

function UploadingRowComponent({
  progress,
  ...rest
}) {
  return <div
    {...rest}
    className={cx(styles['uploading-row'], rest.className)}
  >
    <div
      className={styles['uploading-row__right']}
    >
      <div
        className={styles.filename}
      >
        {progress.file.name}
      </div>

      <ProgressBar
        percent={progress.percent}
      />

      <div
        className={cx(styles.row, styles.size)}
      >
        {humanReadableSize(progress.file.size)}
        <div className={styles.end}>
          {`${progress.percent}%`}
        </div>
      </div>
    </div>
  </div>
}

UploadingRowComponent.propTypes = {
  progress: PropTypes.shape({
    percent: PropTypes.number.isRequired,
    file   : PropTypes.any.isRequired,
  }).isRequired,
}

export default UploadingRowComponent
