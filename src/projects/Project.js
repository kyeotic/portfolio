import React, { Component } from 'react'

import { Gallery } from '../components/index.js'

export default class extends Component {
  constructor(...props) {
    super(...props)
    this.state = {
      isGalleryOpen: false,
      galleryStartIndex: null
    }
  }
  componentWillReceiveProps(nextProps) {
    if (this.props.project !== nextProps.project) {
      this.handleCloseGallery()
    }
  }
  handleCloseGallery = () => {
    this.setState({ isGalleryOpen: false, galleryStartIndex: null })
  }
  handleOpenGallery = photoIndex => {
    this.setState({ isGalleryOpen: true, galleryStartIndex: photoIndex })
  }
  render() {
    let { project } = this.props
    let { isGalleryOpen, galleryStartIndex } = this.state
    return (
      <div className={'row page-pad'}>
        <div className={'col-md-8'}>
          <div dangerouslySetInnerHTML={{ __html: project.content }} />
        </div>
        <div className={'col-md-4'}>
          {project.images
            ? project.images.map((image, index) => {
                return (
                  <img
                    src={image.src}
                    key={image.src}
                    alt={image.title}
                    className="img-rounded img-responsive project-img center-block with-caption image-link"
                    onClick={() => this.handleOpenGallery(index)}
                  />
                )
              })
            : null}
          {isGalleryOpen && (
            <Gallery
              images={project.images}
              onClose={this.handleCloseGallery}
              startIndex={galleryStartIndex}
            />
          )}
        </div>
      </div>
    )
  }
}
