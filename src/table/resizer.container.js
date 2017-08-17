import styles       from './resizer.container.scss'
import PropTypes    from 'prop-types'
import cx           from 'classnames'

import MouseTracker from './MouseTracker.js'

@cssModule(styles)
export default class ResizerContainer extends React.Component {
  static propTypes = {
    // ({deltaX: number, deltaY: number, initialEvent: Event}): void {}
    onResize: PropTypes.func,
  }

  static defaultProps = {
    onResize: () => {},
  }

  state = {
    isDragging  : false,
    // Set to the first event on mouse down so we can hold a reference to the
    // target dom element.
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
    evt.stopPropagation()
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
