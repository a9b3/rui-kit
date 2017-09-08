/*
 * Wrapper around react-markdown to provide default markdown styling.
 */
import styles           from './styles.scss'
import ReactMarkdown    from 'react-markdown'
import {highlightCode} from '~/services/highlight'
import PropTypes        from 'prop-types'

export default class Markdown extends React.Component {
  static propTypes = {
    theme : PropTypes.string,
    source: PropTypes.string,
  }

  componentDidMount() {
    const {
      theme,
    } = this.props
    this.highlightCode(theme)
  }

  highlightCode = (name) => {
    highlightCode(this.el, name)
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
