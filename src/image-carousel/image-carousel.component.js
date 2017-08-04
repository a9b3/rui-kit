import styles     from './image-carousel.component.scss'
import React      from 'react'
import PropTypes  from 'prop-types'
import CSSModules from 'react-css-modules'

function ImageCarouselComponent({
  image,
  next,
  prev,
  style,
  ...rest
}) {
  return <div
    styleName='image'
    style={Object.assign({}, style, {backgroundImage: `url(${image})`})}
    {...rest}
  >
    <div
      styleName='prev'
      onClick={(evt) => { evt.stopPropagation(); prev() }}
    >
      {`<`}
    </div>
    <div
      styleName='next'
      onClick={(evt) => { evt.stopPropagation(); next() }}
    >
      {`>`}
    </div>
  </div>
}

ImageCarouselComponent.propTypes = {
  image: PropTypes.string.isRequired,
  next : PropTypes.func.isRequired,
  prev : PropTypes.func.isRequired,
  style: PropTypes.object,
}

export default CSSModules(ImageCarouselComponent, styles, {allowMultiple: true})
