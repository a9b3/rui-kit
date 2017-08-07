import styles    from './image.component.scss'
import PropTypes from 'prop-types'

function Image({
  src,
  style,
  ...rest
}) {
  const overridenStyle = Object.assign({}, {
    backgroundImage: `url(${src})`,
  }, style)

  return <div
    styleName='image'
    style={overridenStyle}
    {...rest}
  />
}

Image.propTypes = {
  src  : PropTypes.string,
  style: PropTypes.object,
}

export default cssModule(Image, styles, {allowMultiple: true})
