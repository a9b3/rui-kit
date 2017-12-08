import styles    from './styles.css'

import cx        from 'classnames'
import PropTypes from 'prop-types'

import chevron   from '!svg-sprite-loader!./icons/chevron.svg'
import hamburger from '!svg-sprite-loader!./icons/hamburger.svg'

export const ICONS = {
  hamburger,
  chevron,
}

export default function Icon({type, ...rest}) {
  const selectedSvg = ICONS[type]
  if (!selectedSvg) {
    return null
  }

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
Icon.propTypes = {
  type: PropTypes.oneOf(Object.keys(ICONS)).isRequired,
}