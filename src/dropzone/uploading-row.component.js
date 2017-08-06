import styles              from './uploading-row.component.scss'
import PropTypes           from 'prop-types'
import {humanReadableSize} from 'js-functions'

import {ProgressBar}       from '../index.js'

function UploadingRowComponent({
  progress,
  ...rest
}) {
  return <div
    styleName='uploading-row'
    {...rest}
  >
    <div styleName='uploading-row__right'>
      <div styleName='filename'>
        {progress.file.name}
      </div>

      <ProgressBar
        percent={progress.percent}
      />

      <div styleName='row size'>
        {humanReadableSize(progress.file.size)}
        <div styleName='end'>
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

export default cssModule(UploadingRowComponent, styles, {allowMultiple: true})
