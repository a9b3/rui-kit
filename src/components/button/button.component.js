import styles         from './index.scss'
import React          from 'react'
import PropTypes      from 'prop-types'
import CSSModules     from 'react-css-modules'

import LoadingOverlay from '../loading-overlay'

function Button({
  type,
  color,
  href,
  onClick,
  loading,
  style,
  children,
  loadingOverlayAttr,
  ...rest
}) {
  const inlineStyles = getStyles({color})

  const attr = {
    styleName: 'container',
    ...rest,
    style    : Object.assign({}, inlineStyles[type], style),
  }

  if (href) {
    return <a
      {...attr}
      href={href}
    >
      <LoadingOverlay show={loading} {...loadingOverlayAttr} />
      {children}
    </a>
  }

  return <button
    {...attr}
    onClick={onClick}
  >
    <LoadingOverlay show={loading} {...loadingOverlayAttr} />
    {children}
  </button>
}

Button.propTypes = {
  // Pick from two of the provided stylings.
  type              : PropTypes.oneOf(['filled', 'outline']),
  color             : PropTypes.string,
  // Provide href to render a element instead of button element.
  href              : PropTypes.string,
  onClick           : PropTypes.func,
  // Boolean to show loading or not.
  loading           : PropTypes.bool,
  // Override style.
  style             : PropTypes.object,
  children          : PropTypes.node,
  loadingOverlayAttr: PropTypes.object,
}

Button.defaultProps = {
  type              : 'filled',
  loadingOverlayAttr: {},
}

/**
 * Use this to generate style that is a function of the provided 'type'. This
 * isn't defined in the stylesheet because we want to be able to take color as
 * an argument.
 */
function getStyles({color}) {
  return {
    outline: {
      border         : `1.5px solid ${color}`,
      backgroundColor: 'transparent',
      color,
    },
    filled: {
      color          : 'white',
      backgroundColor: color,
    },
  }
}

export default CSSModules(Button, styles, {allowMultiple: true})
