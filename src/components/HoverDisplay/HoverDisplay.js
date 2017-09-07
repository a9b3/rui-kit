import styles    from './styles.scss'
import PropTypes from 'prop-types'
import cx        from 'classnames'

export default class HoverDisplayContainer extends React.Component {
  static propTypes = {
    content : PropTypes.node.isRequired,
    children: PropTypes.node.isRequired,
    align   : PropTypes.oneOf(['left', 'right']),
  }

  static defaultProps = {
    align: 'left',
  }

  state = {
    wrapperStyle: {},
  }

  containerEl = null
  contentWrapper = null

  handleMouseOver = () => {
    const {
      align,
    } = this.props

    const containerElPos = this.containerEl.getBoundingClientRect()

    const wrapperStyle = {
      top: containerElPos.bottom,
    }

    if (align === 'right' || containerElPos.left + this.contentWrapper.offsetWidth > window.innerWidth) {
      wrapperStyle.right = window.innerWidth - containerElPos.right
    } else {
      wrapperStyle.left = containerElPos.left
    }

    this.setState({
      wrapperStyle,
    })
  }

  render() {
    const {
      content,
      children,
      align, // eslint-disable-line
      ...rest
    } = this.props

    const {
      wrapperStyle,
    } = this.state

    return <div
      ref={el => this.containerEl = el}
      onMouseOver={this.handleMouseOver}
      {...rest}
      className={cx(styles.hover, rest.className)}
    >
      {children}

      <div
        className={styles.wrapper}
        ref={el => this.contentWrapper = el}
        style={wrapperStyle}
      >
        {typeof content === 'function' ? content() : content}
      </div>
    </div>
  }
}
