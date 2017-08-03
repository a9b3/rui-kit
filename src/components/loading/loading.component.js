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
  >
    <div
      styleName='before'
      style={Object.assign({}, inlineStyles.inner)}
    />
  </div>
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

  const inlineStyles = {
    root: {
      borderColor   : tinycolor(color).setAlpha(.2),
      borderTopColor: color,
    },
    inner: {
      borderBottomColor: color,
      borderRightColor : color,
    },
  }

  return inlineStyles

}

export default CSSModules(Loading, styles, {allowMultiple: true})
