import PropTypes from 'prop-types'
import cx        from 'classnames'

export default class RuiTheme extends React.Component {
  static propTypes = {
    type     : PropTypes.string,
    className: PropTypes.string,
    style    : PropTypes.any,
    children : PropTypes.node,
  }

  static defaultProps = {
    type: 'light',
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
      require(`./themes/${type}.scss`)
    }
  }

  render() {
    const {
      type,
      style,
      className,
      ...rest
    } = this.props

    return <div
      className={cx('rui', type, className)}
      style={Object.assign({}, {
        height  : '100%',
        overflow: 'auto',
      }, style)}
      {...rest}
    >
      {this.props.children}
    </div>
  }
}
