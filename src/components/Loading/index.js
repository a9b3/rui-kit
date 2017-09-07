import styles    from './styles.scss'
import React     from 'react'
import PropTypes from 'prop-types'
import tinycolor from 'tinycolor2'
import cx        from 'classnames'

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
    {...rest}
    className={cx(styles.loading, rest.className)}
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

export default Loading
