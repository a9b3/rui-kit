import styles     from './index.scss'
import React      from 'react'
import CSSModules from 'react-css-modules'
import PropTypes  from 'prop-types'
import tinycolor  from 'tinycolor2'

/*
 * This component is sized using em values so to resize simply set font size in
 * the parent element.
 */
@CSSModules(styles)
export default class Loading extends React.Component {
  static propTypes = {
    // hex color value
    color: PropTypes.string,
    // whether to show the component or return null
    show: PropTypes.bool,
    style: PropTypes.object,
  }

  render() {
    const {
      color = '#000000',
      show,
      style,
      ...rest,
    } = this.props

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
}

function getStyles({ color }) {

  const inlineStyles = {
    root: {
      borderColor: tinycolor(color).setAlpha(.2),
      borderTopColor: color,
    },
    inner: {
      borderBottomColor: color,
      borderRightColor: color,
    },
  }

  return inlineStyles

}
