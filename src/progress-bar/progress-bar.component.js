import styles    from './progress-bar.component.scss'
import PropTypes from 'prop-types'
import variables from 'esayemm-styles/variables'

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
  outerColor: variables.gray4,
  innerColor: variables.green,
}

export default cssModule(ProgressBar, styles, {allowMultiple: true})
