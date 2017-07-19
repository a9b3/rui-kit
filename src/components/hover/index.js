import styles from './index.scss'

/*
 * super simple hover component
 *
 * you can add animations to the hovered state component by adding animation to
 * the hover component being passed in as a prop to this component
 *
 * ex.
 *
 * <Hover
 *   align={'top'}
 *   justify={'center'}
 *   popup={( <div>Hover Component</div> )}
 * >
 *  Header
 * </Hover>
 */
@CSSModules(styles)
export default class Hover extends React.Component {

  hoverEl = undefined

  static propTypes = {
    children: PropTypes.node.isRequired,
    popup: PropTypes.node.isRequired,
    align: PropTypes.oneOf(['top', 'bottom']),
    justify: PropTypes.oneOf(['center', 'left', 'right']),
  }

  state = {
    isHover: false,
  }

  /*
   * returns the override style, resizes popup element based on screen position
   * etc.
   */
  getOverrideStyle(align = 'top', justify = 'left') {
    const {
      isHover,
    } = this.state

    if (!isHover) {
      return {}
    }

    const overrideStyle = noOverflowDomNode(this.hoverEl) || {}

    let alignStyle = {}
    switch(align) {
      case 'top':
        alignStyle = {
          top: 0,
          transform: `translateY(-100%)`,
        }
        break
      case 'bottom':
        alignStyle = {
          bottom: 0,
          transform: `translateY(100%)`,
        }
        break
    }

    switch(justify) {
      case 'center':
        alignStyle = Object.assign({}, alignStyle, {
          left: '50%',
          transform: `${alignStyle.transform} translateX(-50%)`,
        })
        break
      case 'left':
        alignStyle = Object.assign({}, alignStyle, {
          left: 0,
        })
        break
      case 'right':
        alignStyle = Object.assign({}, alignStyle, {
          right: 0,
        })
        break
    }

    return Object.assign({}, alignStyle, overrideStyle)
  }

  // need to manually trigger getOverrideStyle to calculate resize,
  // since popup state is handled in css
  handleMouseEnter = (e) => {
    this.setState({ isHover: true })
  }
  handleMouseLeave = (e) => {
    this.setState({ isHover: false })
  }

  render() {
    const {
      children,
      popup,
      align,
      justify,
      ...otherProps,
    } = this.props

    return <div
      styleName='container'
      {...otherProps}
      onMouseEnter={this.handleMouseEnter}
      onMouseLeave={this.handleMouseLeave}
    >
      {children}

      <div
        styleName='popup'
        ref={el => this.hoverEl = el}
        style={this.getOverrideStyle(align, justify)}
      >
        {popup}
      </div>
    </div>
  }

}

function noOverflowDomNode(domNode) {
  if (!domNode) {
    return
  }

  const {
    innerWidth,
    innerHeight,
  } = window

  const {
    top,
    right,
    bottom,
    left,
    width,
    height,
  } = domNode.getBoundingClientRect()

  const minusHeight =
    top < 0 ? (0 - top) : 0
    + bottom > innerHeight ? bottom - innerHeight : 0

  const minusWidth =
    left < 0 ? (0 - left) : 0
    + right > innerWidth ? (right - innerWidth) : 0

  const style = {
    width: width - minusWidth,
    height: height - minusHeight,
  }
  return style
}
