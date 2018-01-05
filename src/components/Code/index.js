import styles          from './styles.css'

import cx              from 'classnames'
import PropTypes       from 'prop-types'
import React           from 'react'

import {highlightCode} from './utils'

export default class Code extends React.Component {
  _codeEl = undefined

  static propTypes = {
    children: PropTypes.node,
    // classname for highlight.js to use to do syntax highlighting
    // http://highlightjs.readthedocs.io/en/latest/css-classes-reference.html
    type    : PropTypes.string,
    theme   : PropTypes.string,
    // override attributes for <code />
    codeAttr: PropTypes.object,
  }

  static defaultProps = {
    theme: 'tomorrow-night-eighties',
  }

  componentDidUpdate() {
    this.highlightCode()
  }

  highlightCode() {
    const {theme} = this.props
    highlightCode(this._codeEl, theme)
  }

  render() {
    const {
      codeAttr = {},
      children,
      theme,  // eslint-disable-line
      type,
      ...props
    } = this.props

    return <pre
      {...props}
      className={cx(styles.pre, props.className)}
      ref={el => this._codeEl = el}
    >
      <code
        {...codeAttr}
        className={cx(type, codeAttr.className, styles.code)}
      >
        {children}
      </code>
    </pre>
  }
}
