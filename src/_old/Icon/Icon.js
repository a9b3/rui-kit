import styles    from './styles.scss'
import PropTypes from 'prop-types'
import cx        from 'classnames'

import hamburger from '!svg-sprite-loader!./svgs/hamburger.svg'
import chevron   from '!svg-sprite-loader!./svgs/chevron.svg'

export const svgs = {
  hamburger,
  chevron,
}

function IconComponent({
  type,
  ...rest
}) {
  const selectedSvg = svgs[type]

  return <svg
    viewBox={selectedSvg.viewBox}
    {...rest}
    className={cx(styles.svg, rest.className)}
  >
    <use
      xlinkHref={`#${selectedSvg.id}`}
      style={{fill: 'black'}}
      className={styles.use}
    />
  </svg>
}

IconComponent.propTypes = {
  type: PropTypes.oneOf(Object.keys(svgs)).isRequired,
}

export default IconComponent
