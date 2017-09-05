import PropTypes from 'prop-types'
import cx        from 'classnames'

export default class RuiTheme extends React.Component {
  static propTypes = {
    type     : PropTypes.string,
    className: PropTypes.string,
  }

  static defaultProps = {
    type: '',
  }

  componentDidMount() {
    this.loadStylesheet(this.props.type)
  }

  componentWillUpdate(nextProps) {
    if (nextProps.type !== this.props.type) {
      this.loadStylesheet(nextProps.type)
    }
  }

  loadStylesheet = (type) => {
    const allowed = {dark: true, light: true}
    if (type in allowed) {
      const x = require(`./themes/${type}.scss`)
      console.log(x)
    }
  }

  render() {
    const {
      type,
      className,
      ...rest
    } = this.props

    return <div
      className={cx('rui', type, className)}
      {...rest}
    >
      {this.props.children}
    </div>
  }
}
