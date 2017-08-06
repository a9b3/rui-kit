import PropTypes from 'prop-types'
import uuid      from 'uuid'

export default class SelectFileContainer extends React.Component {
  fileInputEl = null

  static propTypes = {
    children: PropTypes.node,
    onDrop  : PropTypes.func.isRequired,
    disabled: PropTypes.bool,
    // https://www.w3schools.com/tags/att_input_accept.asp
    accept  : PropTypes.string,
    multiple: PropTypes.bool,
  }

  state = {
    isDragActive: false,
  }

  handleClick = (e) => {
    const {
      disabled,
    } = this.props

    e.stopPropagation()
    if (disabled) return
    this.fileInputEl.click()
  }

  handleDrop = async (e) => {
    e.preventDefault()

    const {
      disabled,
      onDrop = () => {},
    } = this.props

    if (disabled) return

    this.setState({
      isDragActive: false,
    })

    // not a real array -__-
    const files = e.dataTransfer ? e.dataTransfer.files : e.target.files
    for (let i = 0; i < files.length; i++) {
      files[i].preview = window.URL.createObjectURL(files[i])
      files[i].id = uuid.v4()
    }

    if (onDrop) {
      await onDrop(files)
    }
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
      multiple,
      accept,
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
