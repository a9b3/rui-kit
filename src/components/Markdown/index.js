/*
 * Wrapper around react-markdown to provide default markdown styling.
 */
import '!style-loader!css-loader!highlight.js/styles/tomorrow-night-eighties.css'

import styles        from './styles.scss'
import ReactMarkdown from 'react-markdown'
import highlight     from 'highlight.js'

export default class Markdown extends React.Component {
  componentDidMount() {
    this.highlightCode()
  }

  highlightCode = () => {
    const codeBlocks = this.el.getElementsByTagName('code')
    for (let i = 0; i < codeBlocks.length; i++) {
      highlight.highlightBlock(codeBlocks[i])
    }
  }

  render() {
    return <span ref={el => this.el = el}>
      <ReactMarkdown
        className={styles.container}
        {...this.props}
      />
    </span>
  }
}
