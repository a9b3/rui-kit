/*
 * ex.
 *
 * <container>
 *   <header />
 *
 *   // Content is not shown when unexpanded.
 *   <content />
 * </container>
 */
export default class Expander {
  constructor({
    duration,
    // Dom references that are required.
    header,
    container,
  }) {
    this.header = header
    this.container = container

    this.duration = duration
    this.fps = 1000/60
    this.totalFrame = Math.round(this.duration/this.fps)

    // {x: number, y: number}
    this._collapsedState = calculateCollapsedScale(this.header, this.container)
  }
}

function calculateCollapsedScale (header, container) {
  const collapsed = header.getBoundingClientRect()
  const expanded = container.getBoundingClientRect()
  return {
    x: collapsed.width / expanded.width,
    y: collapsed.height / expanded.height,
  }
}

function createAnimation({
  // {x: number, y: number}
  initialState,
  totalFrames,
  timingFunc,
}) {
  const expandAnimation = []
  const expandContentAnimation = []
  const collapseAnimation = []
  const collapseContentAnimation = []

  const percentIncrement = 100 / totalFrames

  for (let i = 0; i < totalFrames; i++) {
    const step = timingFunc(i/totalFrames).toFixed(5)
    const percentage = (i*percentIncrement).toFixed(5)
    const startX = initialState.x
    const startY = initialState.y
    const endX = 1
    const endY = 1
  }

  return style
}

function appendStyle({
  textContent,
  className,
}) {
  // Append style to document.
  let style = document.querySelector(`.${className}`)
  if (style) {
    return style
  }
  style = document.createElement('style')
  style.classList.add(className)
  style.textContent = textContent
  document.head.appendChild(style)
}

function ease(v, pow = 4) {
  return 1 - Math.pow(1 - v, pow)
}
