import styles    from './styles.scss'
import PropTypes from 'prop-types'
import cx        from 'classnames'

function Image({
  src,
  style,
  ...rest
}) {
  const overridenStyle = Object.assign({}, {
    backgroundImage: `url(${src})`,
  }, style)

  return <div
    style={overridenStyle}
    {...rest}
    className={cx(styles.image, rest.className)}
  />
}

Image.propTypes = {
  src  : PropTypes.string,
  style: PropTypes.object,
}

export default Image
