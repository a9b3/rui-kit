import styles          from './styles.scss'
import React           from 'react'
import PropTypes       from 'prop-types'
import cx              from 'classnames'
import {highlightCode} from '~/services/highlight'

import {withTheme}     from '~/theme'

@withTheme
export default class Code extends React.Component {

  _codeEl = undefined

  static propTypes = {
    children: PropTypes.node,
    // classname for highlight.js to use to do syntax highlighting
    // http://highlightjs.readthedocs.io/en/latest/css-classes-reference.html
    type    : PropTypes.string,
    // override attributes for <code />
    codeAttr: PropTypes.object,
    theme   : PropTypes.any,
  }

  componentDidMount() {
    this.highlightCode()
  }

  componentWillUpdate() {
    this.highlightCode()
  }

  highlightCode() {
    const {
      theme,
    } = this.props
    highlightCode(this._codeEl, theme.get('codeTheme'))
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
