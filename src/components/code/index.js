import '!style-loader!css-loader!highlight.js/styles/monokai-sublime.css'
// import '!style-loader!css-loader!highlight.js/styles/github.css'
import styles     from './index.scss'
import React      from 'react'
import CSSModules from 'react-css-modules'
import PropTypes  from 'prop-types'
import highlight  from 'highlight.js'

/*

 ex.

 <Code>
  {`simple`}
 </Code>

 */
@CSSModules(styles)
export default class Code extends React.Component {

  _codeEl = undefined

  static propTypes = {
    children: PropTypes.node,
    // classname for highlight.js to use to do syntax highlighting
    // http://highlightjs.readthedocs.io/en/latest/css-classes-reference.html
    type: PropTypes.string,
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
        ...codeAttr,
      } = {},
      children,
      ...rest,
    } = this.props

    return <pre
      styleName='pre'
      {...rest}
    >
      <code
        styleName='code'
        className={type + ' ' + className}
        {...codeAttr}
        ref={el => this._codeEl = el}
      >
        {children}
      </code>
    </pre>
  }

}
