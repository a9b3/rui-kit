import styles    from './styles.scss'
import PropTypes from 'prop-types'
import variables from 'esayemm-styles/variables'
import tinycolor from 'tinycolor2'
import cx        from 'classnames'

function ProgressBar({
  percent,
  outerColor,
  innerColor,
  ...rest
}) {
  const translateValue = -(100 - percent)

  return <div
    style={{
      backgroundColor: outerColor,
    }}
    {...rest}
    className={cx(styles['progress-bar'], rest.className)}
  >
    <div
      className={cx(styles['progress-bar__inner'])}
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

export default ProgressBar
