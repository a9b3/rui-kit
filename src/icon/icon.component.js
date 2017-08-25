import styles     from './icon.component.scss'
import CSSModules from 'react-css-modules'
import PropTypes  from 'prop-types'

import hamburger from './svgs/hamburger.svg'
import chevron from './svgs/chevron.svg'

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
    styleName='svg'
    viewBox={selectedSvg.viewBox}
    {...rest}
  >
    <use xlinkHref={`#${selectedSvg.id}`} style={{fill: 'black'}} styleName='use' />
  </svg>
}

IconComponent.propTypes = {
  type: PropTypes.oneOf(Object.keys(svgs)).isRequired,
}

export default CSSModules(IconComponent, styles, {allowMultiple: true})
