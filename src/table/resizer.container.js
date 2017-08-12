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
    isDragging  : false,
    initialEvent: null,
  }

  componentWillMount() {
    this._mouseTracker = new MouseTracker({
      onMouseMove: this.onMouseMove,
      onMouseUp  : this.handleMouseUp,
    })
  }

  componentWillUnmount() {
    this._mouseTracker._stopCapturing()
    this._mouseTracker = null
  }

  onMouseMove = ({
    deltaX,
    deltaY,
    evt,
  }) => {
    const {
      onResize,
    } = this.props
    const {
      initialEvent,
    } = this.state
    onResize({deltaX, deltaY, initialEvent})
  }

  handleMouseDown = (evt) => {
    evt.persist()
    this.setState({isDragging: true, initialEvent: evt})
    this._mouseTracker.captureMovement(evt)
  }

  handleMouseUp = () => {
    this.setState({isDragging: false, initialEvent: null})
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
