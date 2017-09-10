import styles     from './styles.scss'
import PropTypes  from 'prop-types'
import cx         from 'classnames'

import Transition from '~/components/Transition'

export default class HoverDisplayContainer extends React.Component {
  static propTypes = {
    content        : PropTypes.node.isRequired,
    children       : PropTypes.node.isRequired,
    align          : PropTypes.oneOf(['left', 'right']),
    transitionProps: PropTypes.object,
  }

  static defaultProps = {
    align          : 'left',
    transitionProps: {},
  }

  state = {
    wrapperStyle: {},
    show        : false,
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
      show: true,
      wrapperStyle,
    })
  }

  handleMouseLeave = () => {
    this.setState({show: false})
  }

  render() {
    const {
      content,
      children,
      align, // eslint-disable-line
      transitionProps,
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
        <Transition {...transitionProps}>
          {show ? typeof content === 'function' ? content() : content : null}
        </Transition>
      </div>
    </div>
  }
}
