import styles     from './icon.component.scss'
import CSSModules from 'react-css-modules'
import PropTypes  from 'prop-types'

const requireContext = require.context('./svgs', false, /\.svg$/i)
export const svgs = requireContext.keys().map(requireContext).reduce((state, icon) => {
  return {
    ...state,
    [icon.default.id]: icon.default,
  }
}, {})

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
