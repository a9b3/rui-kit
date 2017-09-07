import styles    from './styles.scss'
import React     from 'react'
import PropTypes from 'prop-types'
import cx        from 'classnames'

import {Icon}    from '~/components/Icon'

function ImageCarouselComponent({
  image,
  next,
  prev,
  style,
  ...rest
}) {
  return <div
    style={Object.assign({}, style, {backgroundImage: `url(${image})`})}
    {...rest}
    className={cx(styles.image, rest.className)}
  >
    <div
      className={cx(styles.prev)}
      onClick={(evt) => { evt.stopPropagation(); prev() }}
    >
      <Icon type='chevron'/>
    </div>
    <div
      className={cx(styles.next)}
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

export default ImageCarouselComponent
