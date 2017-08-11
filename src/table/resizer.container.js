import styles       from './resizer.container.scss'
import PropTypes    from 'prop-types'
import cx           from 'classnames'

import MouseTracker from './MouseTracker.js'

@cssModule(styles)
export default class ResizerContainer extends React.Component {
  static propTypes = {
    onResize: PropTypes.func,
  }

  static defaultProps = {
    onResize: () => {},
  }

  state = {
    isDragging: false,
  }

  componentWillMount() {
    this._mouseTracker = new MouseTracker({
      onMouseMove: this.onMouseMove,
      onMouseUp  : this.handleMouseUp,
    })
  }

  componentWillUnmount() {
    this._mouseTracker.stopListening()
    this._mouseTracker = null
  }

  onMouseMove = ({
    deltaX,
    deltaY,
  }) => {
    const {
      onResize,
    } = this.props
    onResize({deltaX, deltaY})
  }

  handleMouseDown = (evt) => {
    this.setState({isDragging: true})
    this._mouseTracker.captureMovement(evt)
  }

  handleMouseUp = () => {
    this.setState({isDragging: false})
  }

  render() {
    const {
      isDragging,
    } = this.state

    return <div
      className={cx({
        [styles.container]: true,
        [styles.dragging] : isDragging,
      })}
      onMouseDown={this.handleMouseDown}
    />
  }
}
