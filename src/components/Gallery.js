import React, { Component } from 'react'
import Lightbox from 'react-image-lightbox'

export default class Gallery extends Component {
  constructor(props, ...args) {
    super(props, ...args)
    this.state = {
      imageIndex: props.startIndex || 0
    }
  }

  handleMovePrevious = () => {
    let { images } = this.props
    let { imageIndex } = this.state
    this.setState({
      imageIndex: (imageIndex + images.length - 1) % images.length
    })
  }

  handleMoveNext = () => {
    let { images } = this.props
    let { imageIndex } = this.state
    this.setState({
      imageIndex: (imageIndex + 1) % images.length
    })
  }

  render() {
    let { images } = this.props
    let { imageIndex } = this.state
    return (
      <Lightbox
        mainSrc={images[imageIndex].src}
        nextSrc={images[(imageIndex + 1) % images.length].src}
        prevSrc={images[(imageIndex + images.length - 1) % images.length].src}
        imageCaption={images[imageIndex].title}
        onCloseRequest={() => this.props.onClose()}
        onMovePrevRequest={this.handleMovePrevious}
        onMoveNextRequest={this.handleMoveNext}
      />
    )
  }
}
