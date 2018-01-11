import styles    from './styles.css'

import cx        from 'classnames'
import PropTypes from 'prop-types'
import React     from 'react'

export default class ClickCopy extends React.Component {
  static propTypes = {
    children: PropTypes.node,
    copyText: PropTypes.string.isRequired,
  }

  copyToClipboard = str => {
    const textarea = document.createElement('textarea')
    textarea.innerText = str
    document.body.append(textarea)
    textarea.select()
    document.execCommand('copy')
    textarea.remove()
  }

  handleClick = () => {
    const { copyText } = this.props
    this.copyToClipboard(copyText)
  }

  render() {
    const {
      children,
      copyText, // eslint-disable-line
      ...rest
    } = this.props

    return (
      <span
        {...rest}
        className={cx(styles.container, rest.className)}
        onClick={this.handleClick}
      >
        {children}
      </span>
    )
  }
}
