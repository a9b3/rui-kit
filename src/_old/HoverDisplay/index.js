import styles    from './styles.css'

import cx        from 'classnames'
import PropTypes from 'prop-types'

export default class HoverDisplay extends React.Component {
  containerEl = null
  contentWrapper = null

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
    show        : false,
  }

  handleMouseOver = () => {
    const {align} = this.props
    const containerElPos = this.containerEl.getBoundingClientRect()
    const wrapperStyle = {
      top: containerElPos.bottom,
    }

    if (align === 'right' || containerElPos.left + this.contentWrapper.offsetWidth > window.innerWidth) {
      wrapperStyle.right = window.innerWidth - containerElPos.right
    } else {
      wrapperStyle.left = containerElPos.left
    }

    this.setState({show: true, wrapperStyle})
  }

  handleMouseLeave = () => {
    this.setState({show: false})
  }

  render() {
    const {
      content,
      children,
      align, // eslint-disable-line
      ...rest
    } = this.props
    const {
      show,
      wrapperStyle,
    } = this.state

    return <div
      ref={el => this.containerEl = el}
      {...rest}
      className={cx(styles.hover, rest.className)}
      onMouseOver={this.handleMouseOver}
      onMouseLeave={this.handleMouseLeave}
    >
      {children}
      <div
        className={styles.wrapper}
        ref={el => this.contentWrapper = el}
        style={wrapperStyle}
      >
        {show ? typeof content === 'function' ? content() : content : null}
      </div>
    </div>
  }
}
