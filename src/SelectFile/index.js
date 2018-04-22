import PropTypes from 'prop-types'
import React     from 'react'

export default class SelectFile extends React.PureComponent {
  fileInputEl = null

  static propTypes = {
    onDrop: PropTypes.func.isRequired,
    disabled: PropTypes.bool,
    // https://www.w3schools.com/tags/att_input_accept.asp
    accept: PropTypes.string,
    multiple: PropTypes.bool,
  }

  state = {
    isDragActive: false,
  }

  handleClick = e => {
    e.stopPropagation()
    const { disabled } = this.props

    if (!disabled) {
      this.fileInputEl.click()
    }
  }

  handleDrop = async e => {
    e.preventDefault()
    const { disabled, onDrop } = this.props
    if (disabled) return

    this.setState({ isDragActive: false })

    const files = e.dataTransfer ? e.dataTransfer.files : e.target.files
    for (let i = 0; i < files.length; i++) {
      files[i].preview = window.URL.createObjectURL(files[i])
    }

    await onDrop(files)
  }

  handleDragEnter = e => {
    e.preventDefault()
    this.setState({ isDragActive: true })
  }

  handleDragOver = e => {
    e.preventDefault()
    e.stopPropagation()
  }

  handleDragLeave = e => {
    e.preventDefault()
    this.setState({ isDragActive: false })
  }

  render() {
    const { children, multiple, accept } = this.props

    return (
      <span
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
          type="file"
          ref={el => (this.fileInputEl = el)}
          onChange={this.handleDrop}
        />
      </span>
    )
  }
}
