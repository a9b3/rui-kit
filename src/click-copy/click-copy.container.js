import styles    from './click-copy.scss'
import PropTypes from 'prop-types'

@cssModule(styles)
export default class ClickCopyContainer extends React.Component {
  static propTypes = {
    children: PropTypes.node,
    copyText: PropTypes.string.isRequired,
  }

  copyToClipboard = (str) => {
    const textarea = document.createElement('textarea')
    textarea.innerText = str

    document.body.append(textarea)
    textarea.select()
    document.execCommand('copy')
    textarea.remove()
  }

  handleClick = () => {
    const {
      copyText,
    } = this.props

    this.copyToClipboard(copyText)
  }

  render() {
    const {
      children,
      copyText, // eslint-disable-line
      ...rest
    } = this.props

    return <div
      styleName='container'
      {...rest}
      onClick={this.handleClick}
    >
      {children}
    </div>
  }
}
