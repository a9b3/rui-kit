import styles         from './styles.scss'
import React          from 'react'
import PropTypes      from 'prop-types'
import tinycolor      from 'tinycolor2'
import cx             from 'classnames'

import LoadingOverlay from '~/components/LoadingOverlay'

function Button({
  styleType,
  color,
  href,
  onClick,
  loading,
  style,
  children,
  loadingOverlayAttr,
  className,
  ...rest
}) {
  const inlineStyles = getStyles({color})

  const attr = {
    className: cx(styles.button, className),
    ...rest,
    style    : Object.assign({}, inlineStyles[styleType], style),
  }

  if (href) {
    return <a
      {...attr}
      href={href}
    >
      <LoadingOverlay show={loading} {...loadingOverlayAttr} />
      <span style={{ opacity: loading ? '0' : '1'}}>
        {children}
      </span>
    </a>
  }

  return <button
    {...attr}
    onClick={onClick}
  >
    <LoadingOverlay show={loading} color={styleType === 'filled' ? 'white' : color} {...loadingOverlayAttr} />
    <span style={{ opacity: loading ? '0' : '1'}}>
      {children}
    </span>
  </button>
}

Button.propTypes = {
  // Pick from two of the provided stylings.
  styleType         : PropTypes.oneOf(['filled', 'outline']),
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
  className         : PropTypes.string,
}

Button.defaultProps = {
  styleType         : 'filled',
  loadingOverlayAttr: {},
}

/**
 * Use this to generate style that is a function of the provided 'styleType'. This
 * isn't defined in the stylesheet because we want to be able to take color as
 * an argument.
 */
function getStyles({color}) {
  return {
    outline: {
      border         : `2px solid ${tinycolor(color).lighten(15).toString()}`,
      backgroundColor: 'transparent',
      color,
    },
    filled: {
      color          : 'white',
      backgroundColor: color,
    },
  }
}

export default Button
