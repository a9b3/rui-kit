import styles    from './hover-display.container.scss'
import PropTypes from 'prop-types'

@cssModule(styles)
export default class HoverDisplayContainer extends React.Component {
  static propTypes = {
    content : PropTypes.node.isRequired,
    children: PropTypes.node.isRequired,
  }

  state = {
    wrapperStyle: {},
  }

  containerEl = null
  contentWrapper = null

  handleMouseOver = () => {
    const containerElPos = this.containerEl.getBoundingClientRect()

    const wrapperStyle = {
      top: containerElPos.bottom,
    }

    if (containerElPos.left + this.contentWrapper.offsetWidth > window.innerWidth) {
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
      ...rest
    } = this.props

    const {
      wrapperStyle,
    } = this.state

    return <div
      styleName='hover'
      ref={el => this.containerEl = el}
      onMouseOver={this.handleMouseOver}
      {...rest}
    >
      {children}

      <div styleName='wrapper'
        ref={el => this.contentWrapper = el}
        style={wrapperStyle}
      >
        <div>
          {content}
        </div>
      </div>
    </div>
  }
}
