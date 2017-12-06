import styles          from './styles.scss'
import React           from 'react'
import PropTypes       from 'prop-types'
import cx              from 'classnames'
import {highlightCode} from '~/services/highlight'

export default class Code extends React.Component {

  _codeEl = undefined

  static propTypes = {
    children: PropTypes.node,
    // classname for highlight.js to use to do syntax highlighting
    // http://highlightjs.readthedocs.io/en/latest/css-classes-reference.html
    type    : PropTypes.string,
    // override attributes for <code />
    codeAttr: PropTypes.object,
  }

  componentDidMount() {
    this.highlightCode()
  }

  componentWillUpdate() {
    this.highlightCode()
  }

  highlightCode() {
    highlightCode(this._codeEl)
  }

  render() {
    const {
      type,
      codeAttr: {
        className,
        ...codeAttr
      } = {},
      children,
      ...rest
    } = this.props

    return <pre
      {...rest}
      className={cx(styles.pre, rest.className)}
      ref={el => this._codeEl = el}
    >
      <code
        {...codeAttr}
        className={cx(type, className, styles.code)}
      >
        {children}
      </code>
    </pre>
  }

}
