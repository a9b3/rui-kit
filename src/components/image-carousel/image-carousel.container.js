import React                  from 'react'
import PropTypes              from 'prop-types'
import ImageCarouselComponent from './image-carousel.component.js'

export default class ImageCarouselContainer extends React.Component {
  static propTypes = {
    images: PropTypes.arrayOf(PropTypes.string),
  }

  static defaultProps = {
    images: [],
  }

  state = {
    currentIndex: 0,
  }

  next = () => {
    const {
      images,
    } = this.props
    const {
      currentIndex,
    } = this.state

    const nextIndex = currentIndex+1 >= images.length ? 0 : currentIndex+1
    this.setState({currentIndex: nextIndex})
  }

  prev = () => {
    const {
      images,
    } = this.props
    const {
      currentIndex,
    } = this.state

    const nextIndex = currentIndex-1 < 0 ? images.length-1 : currentIndex-1
    this.setState({currentIndex: nextIndex})
  }

  render() {
    const {
      images,
      ...rest
    } = this.props
    const {
      currentIndex,
    } = this.state

    const image = images[currentIndex]

    return <ImageCarouselComponent
      {...rest}
      image={image}
      next={this.next}
      prev={this.prev}
    />
  }
}
