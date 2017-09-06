import styles     from './styles.scss'
import React      from 'react'
import PropTypes  from 'prop-types'
import CSSModules from 'react-css-modules'

import Icon       from '~/components/Icon'

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
      <Icon type='chevron'/>
    </div>
    <div
      styleName='next'
      onClick={(evt) => { evt.stopPropagation(); next() }}
    >
      <Icon type='chevron' style={{transform: 'rotate(180deg)'}}/>
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
