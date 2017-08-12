import React      from 'react'
import CSSModules from 'react-css-modules'
import PropTypes  from 'prop-types'
import tinycolor  from 'tinycolor2'

import styles     from './index.scss'

function Loading({
  color,
  show,
  style,
  ...rest
}) {
  if (!show) {
    return null
  }

  const inlineStyles = getStyles({ color })

  return <div
    styleName='loading'
    {...rest}
    style={Object.assign({}, inlineStyles.root, style)}
  />
}

Loading.propTypes = {
  // hex color value
  color: PropTypes.string,
  // whether to show the component or return null
  show : PropTypes.bool,
  style: PropTypes.object,

}

Loading.defaultProps = {
  color: '#000000',
}

function getStyles({ color }) {

  const fadedColor = tinycolor(color).setAlpha(.15)

  const inlineStyles = {
    root: {
      borderColor   : fadedColor,
      borderTopColor: color,
    },
  }

  return inlineStyles

}

export default CSSModules(Loading, styles, {allowMultiple: true})
