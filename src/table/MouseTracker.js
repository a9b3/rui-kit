/*
 * Tracks mouse movement and reports back the delta through the passed in
 * callback.
 */
export default class MouseTracker {
  _onMouseMove = null
  _onMouseUp = null

  _prevX = 0
  _prevY = 0
  _deltaX = 0
  _deltaY = 0

  constructor({
    onMouseMove,
    onMouseUp,
  }) {
    this._onMouseMove = onMouseMove || function() {}
    this._onMouseUp = onMouseUp || function() {}
  }

  /**
   * Pass in an initial event to establish the initial client x and y values.
   */
  captureMovement(evt) {
    document.addEventListener('mousemove', this._handleMouseMove)
    document.addEventListener('mouseup', this._handleMouseUp)

    this._deltaX = 0
    this._deltaY = 0
    this._prevX = evt.clientX
    this._prevY = evt.clientY
  }

  _stopCapturing() {
    document.removeEventListener('mousemove', this._handleMouseMove)
    document.removeEventListener('mouseup', this._handleMouseUp)
  }

  _handleMouseMove = (evt) => {
    evt.stopPropagation()
    window.requestAnimationFrame(this.__handleMouseMove.bind(this, evt))
  }

  __handleMouseMove = (evt) => {
    this._deltaX = evt.clientX - this._prevX
    this._deltaY = evt.clientY - this._prevY
    this._prevX = evt.clientX
    this._prevY = evt.clientY

    this._onMouseMove({
      deltaX: this._deltaX,
      deltaY: this._deltaY,
      evt,
    })
  }

  _handleMouseUp = () => {
    this._stopCapturing()
    this._onMouseUp()
  }
}

