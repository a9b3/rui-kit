import styles    from './progress-bar.component.scss'
import PropTypes from 'prop-types'
import variables from 'esayemm-styles/variables'
import tinycolor from 'tinycolor2'

function ProgressBar({
  percent,
  outerColor,
  innerColor,
  ...rest
}) {

  const translateValue = -(100 - percent)

  return <div
    styleName='progress-bar'
    style={{
      backgroundColor: outerColor,
    }}
    {...rest}
  >
    <div
      styleName='progress-bar__inner'
      style={{
        backgroundColor: innerColor,
        transform      : `translateX(${translateValue}%)`,
      }}
    />
  </div>
}

ProgressBar.propTypes = {
  percent   : PropTypes.number.isRequired,
  outerColor: PropTypes.string,
  innerColor: PropTypes.string,
}

ProgressBar.defaultProps = {
  outerColor: tinycolor(variables.colors.secondary).setAlpha(.2).toString(),
  innerColor: variables.colors.success,
}

export default cssModule(ProgressBar, styles, {allowMultiple: true})
