import styles    from './uploading.component.scss'
import PropTypes from 'prop-types'

function UploadingComponent({
  progress,
  ...rest
}) {
  progress.map(({
    percent,
  }) => {
    return <div>
      {percent}
    </div>
  })

  return <div
    {...rest}
  >
    hi
  </div>
}

UploadingComponent.propTypes = {
  progress: PropTypes.arrayOf(PropTypes.shape({
    percent: PropTypes.number,
  })),
}

UploadingComponent.defaultProps = {
  progress: [
    {
      percent: 0,
    },
    {
      percent: 10,
    },
    {
      percent: 50,
    },
  ],
}

export default cssModule(UploadingComponent, styles, {allowMultiple: true})
