import PropTypes               from 'prop-types'

import SelectFileContainer     from './select-file.container.js'
import PreUploadComponent      from './preupload.component.js'
import ErrorOverlayComponent   from './error-overlay.component.js'
import SuccessOverlayComponent from './success-overlay.component.js'

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
    uploadFiles: () => true,
  }

  state = {
    uploading: false,
    error    : false,
    success  : false,
    files    : {},
  }

  handleDrop = async (files) => {
    const {
      validate,
      uploadFiles,
    } = this.props

    this.reset()

    try {
      await validate(files)

      this.setState({uploading: true, files})
      await uploadFiles(files)
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
    })
  }

  render() {
    const {
      uploading,
      error,
      success,
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

    }

    return <SelectFileContainer
      onDrop={this.handleDrop}
    >
      <PreUploadComponent />
    </SelectFileContainer>
  }
}
