import PropTypes               from 'prop-types'

import SelectFileContainer     from './select-file.container.js'
import PreUploadComponent      from './preupload.component.js'
import ErrorOverlayComponent   from './error-overlay.component.js'
import SuccessOverlayComponent from './success-overlay.component.js'
import UploadingComponent      from './uploading.component.js'

function timeoutAsync(cb) {
  return new Promise((resolve, reject) => {
    const interval = setInterval(() => {
      cb()
    }, 500)
    setTimeout(() => {
      clearInterval(interval)
      resolve()
    }, 4000)
  })
}

export default class DropzoneContainer extends React.Component {
  static propTypes = {
    // validate(files: Files): boolean {}
    // Files is a pseudo array.
    validate   : PropTypes.func,
    // uploadFiles(files: Files)
    uploadFiles: PropTypes.func.isRequired,
  }

  static defaultProps = {
    validate   : () => true,
    uploadFiles: async (files, setProgress) => {
      const promises = []
      for (let i = 0; i < files.length; i++) {
        promises.push(timeoutAsync(() => {
          setProgress(files[i].id, Math.random() * 100)
        }))
      }
      await Promise.all(promises)
    },
  }

  state = {
    uploading: false,
    error    : false,
    success  : false,
    files    : {},
    progress : [],
  }

  handleDrop = async (files) => {
    const {
      validate,
      uploadFiles,
    } = this.props

    this.reset()

    try {
      await validate(files)

      this.setState({
        uploading: true,
        files,
        progress : this.initProgressFromFiles(files),
      })
      await uploadFiles(files, this.setProgress)
      this.setState({success: true})
    } catch (error) {
      this.setState({error})
    }
    this.setState({uploading: false})
  }

  reset = () => {
    this.setState({
      success  : false,
      error    : false,
      uploading: false,
      files    : {},
      progress : [],
    })
  }

  initProgressFromFiles = (files) => {
    const progress = []
    for (let i = 0; i < files.length; i++) {
      progress.push({
        percent: 0,
        file   : files[i],
      })
    }
    return progress
  }

  setProgress = (id, percent) => {
    const {
      progress,
    } = this.state


    for (let i = 0; i < progress.length; i++) {
      if (progress[i].file.id === id) {
        progress[i].percent = percent
        break
      }
    }

    this.setState({progress})
  }

  render() {
    const {
      uploading,
      error,
      success,
      progress,
    } = this.state

    if (success) {
      return <SuccessOverlayComponent
        onClick={this.reset}
      />
    }

    if (error) {
      return <ErrorOverlayComponent
        error={error}
        onClick={this.reset}
      />
    }

    if (uploading) {
      return <UploadingComponent
        progress={progress}
      />
    }

    return <SelectFileContainer
      multiple
      onDrop={this.handleDrop}
    >
      <PreUploadComponent />
    </SelectFileContainer>
  }
}
