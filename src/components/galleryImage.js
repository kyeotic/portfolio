import React, { Component } from 'react';

export default class GalleryImage extends Component {
	render() {
		return <img src={this.props.src} alt={this.props.alt} className={'img-rounded img-responsive project-img center-block with-caption image-link'} />
	}
}