import styles     from './index.scss'
import React      from 'react'
import CSSModules from 'react-css-modules'
import PropTypes  from 'prop-types'

@CSSModules(styles, { allowMultiple: true })
export default class Button extends React.Component {
  static propTypes = {
    children: PropTypes.node,
    type: PropTypes.oneOf(['filled', 'outline']),
    color: PropTypes.string,
    style: PropTypes.object,
    href: PropTypes.string,
  }

  static defaultProps = {
    type: 'filled',
  }

  render() {
    const {
      children,
      type,
      color,
      style,
      href,
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
        {children}
      </a>
    }

    return <button {...attr}>
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
