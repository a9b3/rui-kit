import '!style-loader!css-loader!highlight.js/styles/tomorrow-night-eighties.css'

import styles     from './styles.scss'
import React      from 'react'
import CSSModules from 'react-css-modules'
import PropTypes  from 'prop-types'
import highlight  from 'highlight.js'
import variables  from 'esayemm-styles/variables'

@CSSModules(styles)
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

  highlightCode = () => {
    highlight.highlightBlock(this._codeEl)
  }

  componentDidMount() {
    this.highlightCode()
  }

  componentDidUpdate() {
    this.highlightCode()
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
      styleName='pre'
      {...rest}
    >
      <code
        style={{
          padding : `${variables.sizing.spacing4} ${variables.sizing.spacing3}`,
          fontSize: '.8em',
        }}
        className={type + ' ' + className}
        {...codeAttr}
        ref={el => this._codeEl = el}
      >
        {children}
      </code>
    </pre>
  }

}
