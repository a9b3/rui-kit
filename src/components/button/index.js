import styles         from './index.scss'
import React          from 'react'
import CSSModules     from 'react-css-modules'
import PropTypes      from 'prop-types'
import LoadingOverlay from '../loading-overlay'

@CSSModules(styles, { allowMultiple: true })
export default class Button extends React.Component {
  static propTypes = {
    children: PropTypes.node,
    type: PropTypes.oneOf(['filled', 'outline']),
    color: PropTypes.string,
    style: PropTypes.object,
    href: PropTypes.string,
    onClick: PropTypes.func,
    loadingOverlayAttr: PropTypes.object,
  }

  static defaultProps = {
    type: 'filled',
    loadingOverlayAttr: {},
  }

  state = {
    loading: false,
  }

  handleClick = async () => {
    const {
      loading,
    } = this.state
    if (loading) return

    const {
      onClick,
    } = this.props
    if (!onClick) return

    this.setState({ loading: true })
    await onClick()
    this.setState({ loading: false })
  }

  render() {
    const {
      loading,
    } = this.state
    const {
      children,
      type,
      color,
      style,
      href,
      loadingOverlayAttr,
      ...rest,
    } = this.props

    const inlineStyles = getStyles({color})

    const attr = {
      styleName: 'container',
      ...rest,
      style: Object.assign({}, inlineStyles[type], style),
    }

    if (href) {
      return <a {...attr} href={href}>
        <LoadingOverlay show={loading} {...loadingOverlayAttr} />
        {children}
      </a>
    }

    return <button {...attr}
      onClick={this.handleClick}
    >
      <LoadingOverlay show={loading} {...loadingOverlayAttr} />
      {children}
    </button>
  }
}

function getStyles({color}) {
  return {
    outline: {
      border: `1px solid ${color}`,
      backgroundColor: 'transparent',
      color,
    },
    filled: {
      color: 'white',
      backgroundColor: color,
    },
  }
}
