import styles     from './index.scss'
import React      from 'react'
import CSSModules from 'react-css-modules'
import PropTypes  from 'prop-types'

@CSSModules(styles)
export default class Dropfile extends React.Component {
  fileInputEl = null

  static propTypes = {
    children: PropTypes.node,
    validate: PropTypes.func,
    uploadFiles: PropTypes.func.isRequired,
    onDrop: PropTypes.func,
    multiple: PropTypes.bool,
    // https://www.w3schools.com/tags/att_input_accept.asp
    accept: React.PropTypes.string,
  }

  static defaultProps = {
    validate: () => true,
  }

  state = {
    uploading: false,
    error: undefined,
    progress: undefined,
    isDragActive: false,
  }

  handleClick = (e) => {
    e.stopPropagation()
    if (this.state.uploading || this.props.disabled) return
    this.fileInputEl.click()
  }

  handleDrop = async (e) => {
    e.preventDefault()

    const {
      uploading,
    } = this.state
    const {
      validate,
      uploadFiles,
      disabled,
      onDrop = () => {},
    } = this.props

    if (uploading || disabled) return

    this.setState({
      isDragActive: false,
      uploading: true,
      error: undefined,
    })

    // not a real array -__-
    const droppedFiles = e.dataTransfer ? e.dataTransfer.files : e.target.files
    for (let i = 0; i < droppedFiles.length; i++) {
      droppedFiles[i].preview = window.URL.createObjectURL(droppedFiles[i])
    }

    try {
      if (onDrop) {
        await onDrop(droppedFiles)
      }
      if (validate) {
        await validate(droppedFiles)
      }
      if (uploadFiles) {
        await uploadFiles(droppedFiles, this.updateProgress)
      }
    } catch (err) {
      this.setState({ error: err })
    }

    this.setState({
      progress: undefined,
      uploading: false,
    })
  }

  handleDragEnter = (e) => {
    e.preventDefault()
    this.setState({
      isDragActive: true,
    })
  }

  handleDragOver = (e) => {
    e.preventDefault()
    e.stopPropagation()
  }

  handleDragLeave = (e) => {
    e.preventDefault()
    this.setState({
      isDragActive: false,
    })
  }

  render() {
    const {
      children,
      validate,
      uploadFiles,
      onDrop,
      multiple,
      accept,
      ...rest,
    } = this.props

    return <span
      onClick={this.handleClick}
      onDrop={this.handleDrop}
      onDragEnter={this.handleDragEnter}
      onDragOver={this.handleDragOver}
      onDragLeave={this.handleDragLeave}
    >

      {children}

      <input
        style={{ display: 'none' }}
        accept={accept}
        multiple={multiple}
        type='file'
        ref={el => this.fileInputEl = el}
        onChange={this.handleDrop}
      />
    </span>
  }
}
