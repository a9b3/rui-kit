/*
 * Wrapper around remarkable to provide default markdown styling.
 */
import styles          from './styles.scss'
import Remarkable      from 'remarkable'
import {highlightCode} from '~/services/highlight'
import PropTypes       from 'prop-types'

const md = new Remarkable({
  html: true,
})

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
    const {
      source,
    } = this.props

    return <span ref={el => this.el = el}
      className={styles.container}
      dangerouslySetInnerHTML={{__html: md.render(source)}}
    />
  }
}
