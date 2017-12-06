import PropTypes      from 'prop-types'

import SelectFile     from './SelectFile'
import PreUpload      from './PreUpload'
import ErrorOverlay   from './ErrorOverlay'
import SuccessOverlay from './SuccessOverlay'
import Uploading      from './Uploading'

export default class DropzoneContainer extends React.Component {
  static propTypes = {
    // validate(files: Files): boolean {}
    // Files is a pseudo array.
    validate   : PropTypes.func,
    // uploadFiles(files: Files, (id: string, percent: number): void {})
    uploadFiles: PropTypes.func.isRequired,
  }

  static defaultProps = {
    validate   : () => true,
    uploadFiles: () => true,
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
      return <SuccessOverlay
        onClick={this.reset}
      />
    }

    if (error) {
      return <ErrorOverlay
        error={error}
        onClick={this.reset}
      />
    }

    if (uploading) {
      return <Uploading
        progress={progress}
      />
    }

    return <SelectFile
      multiple
      onDrop={this.handleDrop}
    >
      <PreUpload />
    </SelectFile>
  }
}
